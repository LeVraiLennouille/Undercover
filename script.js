(function () {
    "use strict";

    var WORD_PAIRS = [
        ["Chat", "Chien"],
        ["Café", "Thé"],
        ["Pizza", "Burger"],
        ["Plage", "Montagne"],
        ["Été", "Hiver"],
        ["Voiture", "Moto"],
        ["Piscine", "Mer"],
        ["Guitare", "Piano"],
        ["Médecin", "Infirmier"],
        ["Lion", "Tigre"],
        ["Avion", "Train"],
        ["Pomme", "Poire"],
        ["Lune", "Soleil"],
        ["Livre", "Journal"],
        ["Stylo", "Crayon"],
        ["Football", "Rugby"],
        ["Neige", "Pluie"],
        ["Chocolat", "Vanille"],
        ["Château", "Maison"],
        ["Pirate", "Corsaire"],
        ["Vélo", "Trottinette"],
        ["Fromage", "Beurre"],
        ["Whisky", "Vodka"],
        ["Sushi", "Ramen"],
        ["Ordinateur", "Tablette"],
        ["Dentiste", "Chirurgien"],
        ["Rivière", "Lac"],
        ["Étoile", "Planète"],
        ["Pain", "Baguette"],
        ["Cinéma", "Théâtre"],
        ["Requin", "Dauphin"],
        ["Camion", "Bus"],
        ["Hôtel", "Auberge"],
        ["Perroquet", "Aigle"],
        ["Salade", "Soupe"],
        ["Montre", "Bracelet"],
        ["Parapluie", "Manteau"],
        ["Bougie", "Lampe"],
        ["Sapin", "Palmier"],
        ["Robot", "Extraterrestre"],
        ["Policier", "Pompier"],
        ["Violon", "Violoncelle"],
        ["Tornade", "Ouragan"],



        ["Delmas", "Louveton"],
        ["UX", "UI"],
        ["Zoning", "Wireframe"],
        ["Maquette", "Prototype"],
        ["Illustrator", "Photoshop"],
        ["Accessibilité", "Ergonomie"],
        ["Serif", "Sans-serif"],
        ["Montserrat", "Times New Roman"],
        ["WebP", "AVIF"],
        ["Header", "Footer"],
        ["Bouton", "Lien"],
        ["CDI", "CDD"],
        ["Freelance", "Chômeur"],
        ["Tinder", "LinkedIn"],
        ["Instagram", "TikTok"],

        ["Ferrari", "Lamborghini"],
        ["Peugeot", "Renault"],
        ["F1", "Karting"],
        ["Lewis Hamilton", "Michael Schumacher"],
        ["Ayrton Senna", "Alain Prost"],
        ["Chauffeur", "Pilote"],
        ["Pneu", "Roue"],
        ["Accélérer", "Freiner"],
        ["Chronomètre", "Montre"],
        ["Pneu", "Roue"],

        ["Flash", "Flash McQueen"],
        ["Batman", "Ironman"],
        ["Hulk", "RedHulk"],
        ["Woody", "Buzz l'Eclair"],
        ["John Wick", "Tyler Rake"],
        ["Terminator", "Robocop"],
        ["Godzilla", "King Kong"],
        ["Agent 47", "Jason Bourne"],
        ["Cendrillon", "Blanche-Neige"],
        ["Lilo", "Stitch"],
        ["Belle", "Bête"],
        ["Mickey", "Minnie"],


        
        ["Ryan Gosling", "Ryan Reynolds"],
        ["Tom Holland", "Tom Hanks"],
        ["Tom Cruise", "Tom Felton"],
        ["Chris Hemsworth", "Chris Evans"],
        ["Emma Stone", "Emma Watson"],
        ["Will Smith", "Will Ferrell"],
        ["Jennifer Lawrence", "Jennifer Lopez"],
        ["James Cameron", "James Wan"],
        ["Emma Stone", "Emma Thompson"],
        ["Kevin Bacon", "Kevin Hart"],
        ["Dwayne Johnson", "The Rock"],

        ["Tom Holland", "François Hollande"],
        ["Squeezie", "Cyprien"],
        ["David Guetta", "DJ Snake"],
        ["Zinedine Zidane", "Didier Deschamps"],
        ["Ousmane Dembélé", "Kylian Mbappé"],
        ["Laurent Manaudou", "Léon Marchand"],
        ["Pierre Niney", "Pierre Gasly"],
        ["François Civil", "François Cluzet"],
        ["Jean Dujardin", "Jean Reno"],
        ["Jonathan Cohen", "Jonathan Lambert"],
        ["Philippe Lacheau", "Philippe Katerine"],
        ["Gérard Depardieu", "Gérard Jugnot"],
        ["Alain Chabat", "Alain Delon"],

        ["Jérémy Ferrari", "Ferrari"],
        ["Arnaud Tsamère", "Ta mère"],
        ["Jean Dujardin", "Jardin"],
        ["Christian Clavier", "Clavier"],
        ["Thierry Lhermitte", "Ermite"],
        ["Jean Reno", "Renault"],
        ["Marc Lavoine", "Avoine"],
        ["Omar Sy", "Scie"],
        ["Michel Blanc", "Blanc"],
        ["Julien Clerc", "Clair"],

        ["Vin Diesel", "Diesel"],
        ["Harrison Ford", "Ford"],
        ["Kevin Bacon", "Bacon"],
        ["Nicolas Cage", "Cage"],
        ["Taylor Swift", "Suzuki Swift"],
        ["Bruno Mars", "Mars"],
        ["Brad Pitt", "Pit stop"],
        ["50 Cent", "50 centimes"],
        ["Eminem", "M&M's"],



        ["Compte", "Comte"],
        ["Paris", "Marseille"],
        ["Lego", "Playmobil"],
        ["Croissant", "Pain au chocolat"],
        ["Instagram", "TikTok"],
        ["Apple", "Samsung"],
        ["Uber", "Uber Eats"],
        ["Chat", "Chien"],
        ["Coca", "Pepsi"],
        ["Océan", "Mer"],
        ["Criminel", "Délinquant"],
        ["Manette", "Souris"],
        ["Cathédrale", "Église"],
        ["Shampoing", "Gel douche"],
        ["Thé", "Café"],
        ["Boulangerie", "Pâtisserie"],
        ["Lunettes", "Lentilles"],
        ["Miroir", "Vitre"],
        ["Montagne", "Plage"],
        ["Été", "Hiver"],
        ["Terre", "Mars"],
        ["Koh-Lanta", "Fort Boyard"],
        ["Raclette", "Tartiflette"],
        ["Futuroscope", "Disneyland"],
        ["Pain au chocolat", "Chocolatine"],
        ["Réussite", "Échec"],
        ["Licence", "Master"],
        ["Pâtes", "Nouilles"],
        ["Calvitie", "Mulet"],
        ["Mac", "Windows"],
        ["Burger King", "McDonald's"],
        ["Pacsé", "Marié"],

        ["Amande", "Amende"],
        ["Pause", "Pose"],
        ["Tente", "Tante"],
        ["Mer", "Maire"],
        ["Sang", "Cent"],
        ["Voix", "Voie"],
        ["Poids", "Pois"],
        ["Mètre", "Maître"],
        ["Porc", "Port"],
        ["Reine", "Renne"],
        ["Chant", "Champ"],
    ];

    var MIN_PLAYERS = 3;
    var MAX_PLAYERS = 20;

    var state = {
        playerCount: 6,
        players: [],
        round: 1,
        lastPairIndex: -1,
        openCardId: null
    };

    var el = {
        setupScreen: document.getElementById('setup'),
        gameScreen: document.getElementById('game'),
        countMinus: document.getElementById('countMinus'),
        countPlus: document.getElementById('countPlus'),
        countDisplay: document.getElementById('countDisplay'),
        namesGrid: document.getElementById('namesGrid'),
        startBtn: document.getElementById('startBtn'),

        roundNumber: document.getElementById('roundNumber'),
        playerCountLabel: document.getElementById('playerCountLabel'),
        viewedCount: document.getElementById('viewedCount'),
        totalCount: document.getElementById('totalCount'),
        progressFill: document.getElementById('progressFill'),
        statusBanner: document.getElementById('statusBanner'),
        cardsGrid: document.getElementById('cardsGrid'),

        summaryBtn: document.getElementById('summaryBtn'),
        newRoundBtn: document.getElementById('newRoundBtn'),
        resetBtn: document.getElementById('resetBtn'),

        wordModal: document.getElementById('wordModal'),
        modalOwner: document.getElementById('modalOwner'),
        modalRole: document.getElementById('modalRole'),
        modalWord: document.getElementById('modalWord'),
        hideWordBtn: document.getElementById('hideWordBtn'),

        summaryModal: document.getElementById('summaryModal'),
        summaryScrim: document.getElementById('summaryScrim'),
        summaryList: document.getElementById('summaryList'),
        closeSummaryBtn: document.getElementById('closeSummaryBtn'),
        summaryNewRoundBtn: document.getElementById('summaryNewRoundBtn'),

        toast: document.getElementById('toast'),
        srAnnounce: document.getElementById('srAnnounce')
    };

    var toastTimer = null;

    function clamp(n, min, max) {
        return Math.max(min, Math.min(max, n));
    }

    function randomInt(maxExclusive) {
        return Math.floor(Math.random() * maxExclusive);
    }

    function showToast(message) {
        el.toast.textContent = message;
        el.toast.classList.add('toast--show');
        if (toastTimer) clearTimeout(toastTimer);
        toastTimer = setTimeout(function () {
            el.toast.classList.remove('toast--show');
        }, 2600);
    }

    function announce(message) {
        el.srAnnounce.textContent = message;
    }

    function renderNameFields() {
        var count = state.playerCount;
        var existing = el.namesGrid.querySelectorAll('input[data-name-input]');
        var previousValues = [];
        existing.forEach(function (input) {
            previousValues.push(input.value);
        });

        el.namesGrid.innerHTML = '';
        for (var i = 0; i < count; i++) {
            var wrap = document.createElement('div');
            wrap.className = 'name-field';

            var label = document.createElement('label');
            label.setAttribute('for', 'nameInput' + i);
            label.textContent = 'Joueur ' + (i + 1);

            var input = document.createElement('input');
            input.type = 'text';
            input.id = 'nameInput' + i;
            input.maxLength = 20;
            input.setAttribute('data-name-input', 'true');
            input.placeholder = 'Joueur ' + (i + 1);
            if (previousValues[i]) input.value = previousValues[i];

            wrap.appendChild(label);
            wrap.appendChild(input);
            el.namesGrid.appendChild(wrap);
        }
    }

    function updateCounter() {
        el.countDisplay.textContent = state.playerCount;
        el.countMinus.disabled = state.playerCount <= MIN_PLAYERS;
        el.countPlus.disabled = state.playerCount >= MAX_PLAYERS;
    }

    el.countMinus.addEventListener('click', function () {
        state.playerCount = clamp(state.playerCount - 1, MIN_PLAYERS, MAX_PLAYERS);
        updateCounter();
        renderNameFields();
    });

    el.countPlus.addEventListener('click', function () {
        state.playerCount = clamp(state.playerCount + 1, MIN_PLAYERS, MAX_PLAYERS);
        updateCounter();
        renderNameFields();
    });

    function pickWordPair() {
        var index = randomInt(WORD_PAIRS.length);
        if (WORD_PAIRS.length > 1) {
            var guard = 0;
            while (index === state.lastPairIndex && guard < 10) {
                index = randomInt(WORD_PAIRS.length);
                guard++;
            }
        }
        state.lastPairIndex = index;
        var pair = WORD_PAIRS[index];
        var flip = Math.random() < 0.5;
        return {
            civilWord: flip ? pair[0] : pair[1],
            undercoverWord: flip ? pair[1] : pair[0]
        };
    }

    function assignRoles() {
        var words = pickWordPair();
        var undercoverIndex = randomInt(state.players.length);
        state.players.forEach(function (player, i) {
            player.isUndercover = (i === undercoverIndex);
            player.word = player.isUndercover ? words.undercoverWord : words.civilWord;
            player.viewed = false;
        });
    }

    function collectNames() {
        var inputs = el.namesGrid.querySelectorAll('input[data-name-input]');
        var names = [];
        inputs.forEach(function (input, i) {
            var val = input.value.trim();
            names.push(val || ('Joueur ' + (i + 1)));
        });
        return names;
    }

    function startGame() {
        var names = collectNames();
        state.players = names.map(function (name, i) {
            return {
                id: i,
                name: name,
                isUndercover: false,
                word: '',
                viewed: false
            };
        });
        state.round = 1;
        state.lastPairIndex = -1;
        assignRoles();
        switchToGameScreen();
    }

    function switchToGameScreen() {
        el.setupScreen.classList.remove('screen--active');
        el.gameScreen.classList.add('screen--active');
        renderGameHeader();
        renderCards();
    }

    el.startBtn.addEventListener('click', function () {
        if (state.playerCount < MIN_PLAYERS) {
            showToast('Il faut au moins ' + MIN_PLAYERS + ' joueurs pour lancer une manche.');
            return;
        }
        startGame();
    });

    function renderGameHeader() {
        el.roundNumber.textContent = state.round;
        el.playerCountLabel.textContent = state.players.length;
        el.totalCount.textContent = state.players.length;
        updateProgress();
    }

    function updateProgress() {
        var total = state.players.length;
        var viewed = state.players.filter(function (p) {
            return p.viewed;
        }).length;
        el.viewedCount.textContent = viewed;
        el.progressFill.style.width = (total ? (viewed / total * 100) : 0) + '%';

        var allViewed = total > 0 && viewed === total;
        el.summaryBtn.disabled = !allViewed;
        el.statusBanner.classList.toggle('status-banner--show', allViewed);
    }

    var CARD_ICON = '<svg class="card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">' +
        '<circle cx="12" cy="12" r="8.4"/>' +
        '<circle cx="12" cy="12" r="4.6"/>' +
        '<circle cx="12" cy="12" r=".9" fill="currentColor" stroke="none"/></svg>';

    var CHECK_ICON = '<svg class="card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">' +
        '<path d="M4 12.5l5 5L20 6.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

    function cardRotation(id) {
        var steps = (id * 37) % 7;
        var deg = (steps - 3) * 1;
        return deg + 'deg';
    }

    function renderCards() {
        el.cardsGrid.innerHTML = '';
        state.players.forEach(function (player) {
            var card = document.createElement('button');
            card.type = 'button';
            card.className = 'card' + (player.viewed ? ' card--seen' : '');
            card.style.setProperty('--rot', player.viewed ? '0deg' : cardRotation(player.id));
            card.setAttribute('role', 'listitem');
            card.setAttribute('data-id', player.id);

            if (player.viewed) {
                card.disabled = true;
                card.setAttribute('aria-label', player.name + ', carte déjà consultée');
            } else {
                card.setAttribute('aria-label', 'Carte de ' + player.name + ', appuyer pour révéler le mot');
            }

            var indexEl = document.createElement('span');
            indexEl.className = 'card__index';
            indexEl.textContent = '#' + (player.id + 1);

            var iconWrap = document.createElement('span');
            iconWrap.innerHTML = player.viewed ? CHECK_ICON : CARD_ICON;

            var nameEl = document.createElement('span');
            nameEl.className = 'card__name';
            nameEl.textContent = player.viewed ? 'Vu' : player.name;

            card.appendChild(indexEl);
            card.appendChild(iconWrap);
            card.appendChild(nameEl);

            if (!player.viewed) {
                card.addEventListener('click', function () {
                    openCard(player.id);
                });
            }

            el.cardsGrid.appendChild(card);
        });
    }

    function openCard(id) {
        var player = state.players.filter(function (p) {
            return p.id === id;
        })[0];
        if (!player || player.viewed) return;

        state.openCardId = id;
        el.modalOwner.textContent = 'Carte de ' + player.name;
        el.modalRole.textContent = player.isUndercover ?
            'Tu es l\'Undercover — fonds-toi dans la masse' :
            'Tu es Civil — retrouve l\'imposteur';
        el.modalWord.textContent = player.word;

        el.wordModal.classList.add('modal--open');
        el.wordModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        el.hideWordBtn.focus();
        announce('Mot révélé pour ' + player.name);
    }

    function hideOpenCard() {
        if (state.openCardId === null) return;
        var player = state.players.filter(function (p) {
            return p.id === state.openCardId;
        })[0];
        if (player) player.viewed = true;

        el.wordModal.classList.remove('modal--open');
        el.wordModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        state.openCardId = null;

        renderCards();
        updateProgress();

        if (player) {
            var total = state.players.length;
            var viewed = state.players.filter(function (p) {
                return p.viewed;
            }).length;
            announce(player.name + ' a caché sa carte. ' + viewed + ' sur ' + total + ' consultées.');
            if (viewed === total) {
                showToast('Toutes les cartes ont été vues. Place à la discussion !');
            }
        }
    }

    el.hideWordBtn.addEventListener('click', hideOpenCard);

    function openSummary() {
        el.summaryList.innerHTML = '';
        state.players.forEach(function (player) {
            var li = document.createElement('li');

            var nameSpan = document.createElement('strong');
            nameSpan.textContent = player.name;

            var right = document.createElement('span');
            right.style.display = 'flex';
            right.style.alignItems = 'center';
            right.style.gap = '8px';

            var wordSpan = document.createElement('span');
            wordSpan.textContent = player.word;
            wordSpan.style.color = 'var(--ink-soft)';

            var roleSpan = document.createElement('span');
            roleSpan.className = 'summary-role ' + (player.isUndercover ? 'summary-role--undercover' : 'summary-role--civil');
            roleSpan.textContent = player.isUndercover ? 'Undercover' : 'Civil';

            right.appendChild(wordSpan);
            right.appendChild(roleSpan);

            li.appendChild(nameSpan);
            li.appendChild(right);
            el.summaryList.appendChild(li);
        });

        el.summaryModal.classList.add('modal--open');
        el.summaryModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        el.closeSummaryBtn.focus();
    }

    function closeSummary() {
        el.summaryModal.classList.remove('modal--open');
        el.summaryModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    el.summaryBtn.addEventListener('click', openSummary);
    el.closeSummaryBtn.addEventListener('click', closeSummary);
    el.summaryScrim.addEventListener('click', closeSummary);

    function newRound() {
        closeSummary();
        state.round += 1;
        assignRoles();
        renderGameHeader();
        renderCards();
        showToast('Nouvelle manche lancée — de nouveaux mots ont été distribués.');
    }

    el.newRoundBtn.addEventListener('click', newRound);
    el.summaryNewRoundBtn.addEventListener('click', newRound);

    el.resetBtn.addEventListener('click', function () {
        state.players = [];
        state.round = 1;
        el.gameScreen.classList.remove('screen--active');
        el.setupScreen.classList.add('screen--active');
    });

    updateCounter();
    renderNameFields();
})();