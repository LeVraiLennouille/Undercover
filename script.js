(function () {
    "use strict";

    var WORD_THEMES = [{
            key: "classique",
            label: "Général",
            desc: "Le pack classique : objets, animaux, lieux, quotidien.",
            pairs: [
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
                ["Pain de mie", "Baguette"],
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
                ["Compte", "Comte"],
                ["Paris", "Marseille"],
                ["Lego", "Playmobil"],
                ["Croissant", "Pain au chocolat"],
                ["Apple", "Samsung"],
                ["Uber", "Uber Eats"],
                ["Coca", "Pepsi"],
                ["Océan", "Mer"],
                ["Criminel", "Délinquant"],
                ["Manette", "Souris"],
                ["Cathédrale", "Église"],
                ["Shampoing", "Gel douche"],
                ["Boulangerie", "Pâtisserie"],
                ["Lunettes", "Lentilles"],
                ["Miroir", "Vitre"],
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
            ]
        },
        {
            key: "metier",
            label: "Métier UX / Web",
            desc: "Vocabulaire design, dev et vie de bureau.",
            pairs: [
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
            ]
        },
        {
            key: "sportauto",
            label: "Sport auto",
            desc: "Formule 1, courses et pilotes.",
            pairs: [
                ["Ferrari", "Lamborghini"],
                ["Peugeot", "Renault"],
                ["F1", "Karting"],
                ["Lewis Hamilton", "Michael Schumacher"],
                ["Ayrton Senna", "Alain Prost"],
                ["Chauffeur", "Pilote"],
                ["Pneu", "Roue"],
                ["Accélérer", "Freiner"],
                ["Chronomètre", "Montre"],
            ]
        },
        {
            key: "popculture",
            label: "Cinéma & Pop culture",
            desc: "Super-héros, films et personnages cultes.",
            pairs: [
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
            ]
        },
        {
            key: "celebrites",
            label: "Célébrités & Sosies",
            desc: "Stars, sportifs et leurs faux jumeaux.",
            pairs: [
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
            ]
        },
        {
            key: "jeuxdemots",
            label: "Jeux de mots",
            desc: "Calembours autour de noms de célébrités.",
            pairs: [
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
            ]
        },
        {
            key: "homophones",
            label: "Homophones",
            desc: "Mots qui se prononcent pareil, sens différent.",
            pairs: [
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
            ]
        },
    ];

    function getTheme(key) {
        return WORD_THEMES.filter(function (t) {
            return t.key === key;
        })[0];
    }

    function pairId(themeKey, pair) {
        return themeKey + '::' + pair[0] + '::' + pair[1];
    }

    var PAIR_STORAGE_KEY = 'undercover_used_pairs_v1';

    function loadUsedPairs() {
        try {
            var raw = window.localStorage.getItem(PAIR_STORAGE_KEY);
            if (!raw) return {};
            var parsed = JSON.parse(raw);
            return (parsed && typeof parsed === 'object') ? parsed : {};
        } catch (e) {
            return {};
        }
    }

    function saveUsedPairs() {
        try {
            window.localStorage.setItem(PAIR_STORAGE_KEY, JSON.stringify(usedPairsMap));
        } catch (e) {}
    }

    var usedPairsMap = loadUsedPairs();

    var MIN_PLAYERS = 3;
    var MAX_PLAYERS = 20;
    var MIN_UNDERCOVER = 1;

    function maxImpostors(playerCount) {
        return Math.max(MIN_UNDERCOVER, Math.ceil(playerCount / 2) - 1);
    }

    var ROLE_INFO = {
        idiot: {
            label: 'Idiot du village',
            desc: 'Si tu es éliminé dès le tout premier vote, tu gagnes la partie à toi seul !'
        },
        fantome: {
            label: 'Fantôme',
            desc: 'Même éliminé, tu pourras continuer à voter aux prochains tours.'
        },
        mime: {
            label: 'Mime',
            desc: 'Décris ton mot uniquement par gestes, sans jamais parler.'
        },
        procureur: {
            label: 'Procureur',
            desc: 'En cas d\'égalité au vote, c\'est toi qui trancheras qui est éliminé.'
        }
    };

    var state = {
        playerCount: 6,
        undercoverCount: 1,
        mrWhiteCount: 0,
        roles: {
            idiot: false,
            fantome: false,
            mime: false,
            procureur: false,
            amoureux: false
        },
        players: [],
        round: 1,
        selectedThemes: {
            classique: true
        },
        openCardId: null,
        phase: 'reveal',
        pendingEliminationId: null,
        voteCount: 0,
        winner: null,
        winnerDetail: ''
    };

    var el = {
        setupScreen: document.getElementById('setup'),
        gameScreen: document.getElementById('game'),
        countMinus: document.getElementById('countMinus'),
        countPlus: document.getElementById('countPlus'),
        countDisplay: document.getElementById('countDisplay'),
        underMinus: document.getElementById('underMinus'),
        underPlus: document.getElementById('underPlus'),
        underDisplay: document.getElementById('underDisplay'),
        underRange: document.getElementById('underRange'),
        mrwhiteMinus: document.getElementById('mrwhiteMinus'),
        mrwhitePlus: document.getElementById('mrwhitePlus'),
        mrwhiteDisplay: document.getElementById('mrwhiteDisplay'),
        mrwhiteRange: document.getElementById('mrwhiteRange'),
        roleIdiot: document.getElementById('roleIdiot'),
        roleFantome: document.getElementById('roleFantome'),
        roleMime: document.getElementById('roleMime'),
        roleProcureur: document.getElementById('roleProcureur'),
        roleAmoureux: document.getElementById('roleAmoureux'),
        themesGrid: document.getElementById('themesGrid'),
        namesGrid: document.getElementById('namesGrid'),
        startBtn: document.getElementById('startBtn'),

        roundNumber: document.getElementById('roundNumber'),
        playerCountLabel: document.getElementById('playerCountLabel'),
        viewedCount: document.getElementById('viewedCount'),
        totalCount: document.getElementById('totalCount'),
        progressFill: document.getElementById('progressFill'),
        statusBanner: document.getElementById('statusBanner'),
        tableNote: document.getElementById('tableNote'),
        cardsGrid: document.getElementById('cardsGrid'),

        voteSection: document.getElementById('voteSection'),
        eliminatedList: document.getElementById('eliminatedList'),
        voteGrid: document.getElementById('voteGrid'),
        startVoteBtn: document.getElementById('startVoteBtn'),

        gameOverBanner: document.getElementById('gameOverBanner'),
        gameOverTitle: document.getElementById('gameOverTitle'),
        gameOverSub: document.getElementById('gameOverSub'),

        summaryBtn: document.getElementById('summaryBtn'),
        newRoundBtn: document.getElementById('newRoundBtn'),
        resetBtn: document.getElementById('resetBtn'),

        wordModal: document.getElementById('wordModal'),
        modalOwner: document.getElementById('modalOwner'),
        modalRole: document.getElementById('modalRole'),
        modalWord: document.getElementById('modalWord'),
        modalBadges: document.getElementById('modalBadges'),
        hideWordBtn: document.getElementById('hideWordBtn'),

        voteConfirmModal: document.getElementById('voteConfirmModal'),
        voteConfirmName: document.getElementById('voteConfirmName'),
        voteConfirmCancel: document.getElementById('voteConfirmCancel'),
        voteConfirmYes: document.getElementById('voteConfirmYes'),

        eliminationModal: document.getElementById('eliminationModal'),
        elimName: document.getElementById('elimName'),
        elimRole: document.getElementById('elimRole'),
        elimContinueText: document.getElementById('elimContinueText'),
        elimContinueBtn: document.getElementById('elimContinueBtn'),

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

    function clampRoleCounts() {
        var cap = maxImpostors(state.playerCount);
        state.undercoverCount = clamp(state.undercoverCount, MIN_UNDERCOVER, cap);
        state.mrWhiteCount = clamp(state.mrWhiteCount, 0, Math.max(0, cap - state.undercoverCount));
    }

    function updateUnderCounter() {
        clampRoleCounts();
        var cap = maxImpostors(state.playerCount);
        var underMax = Math.max(MIN_UNDERCOVER, cap - state.mrWhiteCount);
        var mrwhiteMax = Math.max(0, cap - state.undercoverCount);

        el.underDisplay.textContent = state.undercoverCount;
        el.underRange.textContent = 'de ' + MIN_UNDERCOVER + ' à ' + underMax;
        el.underMinus.disabled = state.undercoverCount <= MIN_UNDERCOVER;
        el.underPlus.disabled = state.undercoverCount >= underMax;

        el.mrwhiteDisplay.textContent = state.mrWhiteCount;
        el.mrwhiteRange.textContent = 'de 0 à ' + mrwhiteMax;
        el.mrwhiteMinus.disabled = state.mrWhiteCount <= 0;
        el.mrwhitePlus.disabled = state.mrWhiteCount >= mrwhiteMax;
    }

    el.countMinus.addEventListener('click', function () {
        state.playerCount = clamp(state.playerCount - 1, MIN_PLAYERS, MAX_PLAYERS);
        updateCounter();
        updateUnderCounter();
        renderNameFields();
    });

    el.countPlus.addEventListener('click', function () {
        state.playerCount = clamp(state.playerCount + 1, MIN_PLAYERS, MAX_PLAYERS);
        updateCounter();
        updateUnderCounter();
        renderNameFields();
    });

    el.underMinus.addEventListener('click', function () {
        state.undercoverCount = clamp(state.undercoverCount - 1, MIN_UNDERCOVER, maxImpostors(state.playerCount));
        updateUnderCounter();
    });

    el.underPlus.addEventListener('click', function () {
        var cap = maxImpostors(state.playerCount);
        state.undercoverCount = clamp(state.undercoverCount + 1, MIN_UNDERCOVER, Math.max(MIN_UNDERCOVER, cap - state.mrWhiteCount));
        updateUnderCounter();
    });

    el.mrwhiteMinus.addEventListener('click', function () {
        state.mrWhiteCount = clamp(state.mrWhiteCount - 1, 0, maxImpostors(state.playerCount));
        updateUnderCounter();
    });

    el.mrwhitePlus.addEventListener('click', function () {
        var cap = maxImpostors(state.playerCount);
        state.mrWhiteCount = clamp(state.mrWhiteCount + 1, 0, Math.max(0, cap - state.undercoverCount));
        updateUnderCounter();
    });

    el.roleIdiot.addEventListener('change', function () {
        state.roles.idiot = el.roleIdiot.checked;
    });
    el.roleFantome.addEventListener('change', function () {
        state.roles.fantome = el.roleFantome.checked;
    });
    el.roleMime.addEventListener('change', function () {
        state.roles.mime = el.roleMime.checked;
    });
    el.roleProcureur.addEventListener('change', function () {
        state.roles.procureur = el.roleProcureur.checked;
    });
    el.roleAmoureux.addEventListener('change', function () {
        state.roles.amoureux = el.roleAmoureux.checked;
    });

    function renderThemeToggles() {
        el.themesGrid.innerHTML = '';
        WORD_THEMES.forEach(function (theme) {
            var label = document.createElement('label');
            label.className = 'toggle-item';

            var input = document.createElement('input');
            input.type = 'checkbox';
            input.id = 'theme-' + theme.key;
            input.checked = !!state.selectedThemes[theme.key];
            input.addEventListener('change', function () {
                state.selectedThemes[theme.key] = input.checked;
            });

            var span = document.createElement('span');
            var strong = document.createElement('strong');
            strong.textContent = theme.label;
            var small = document.createElement('small');
            small.textContent = theme.desc + ' — ' + theme.pairs.length + ' paires';
            span.appendChild(strong);
            span.appendChild(small);

            label.appendChild(input);
            label.appendChild(span);
            el.themesGrid.appendChild(label);
        });
    }

    function selectedThemeKeys() {
        return WORD_THEMES.filter(function (t) {
                return state.selectedThemes[t.key];
            })
            .map(function (t) {
                return t.key;
            });
    }

    function pickWordPair() {
        var themeKeys = selectedThemeKeys();
        if (!themeKeys.length) themeKeys = ['classique'];

        var pool = [];
        themeKeys.forEach(function (key) {
            var theme = getTheme(key);
            if (!theme) return;
            theme.pairs.forEach(function (pair) {
                pool.push({
                    id: pairId(key, pair),
                    pair: pair
                });
            });
        });
        if (!pool.length) {
            pool = getTheme('classique').pairs.map(function (pair) {
                return {
                    id: pairId('classique', pair),
                    pair: pair
                };
            });
        }

        var available = pool.filter(function (entry) {
            return !usedPairsMap[entry.id];
        });
        if (!available.length) {
            pool.forEach(function (entry) {
                delete usedPairsMap[entry.id];
            });
            available = pool.slice();
            showToast('Toutes les paires des thèmes sélectionnés ont été utilisées — le stock repart à zéro.');
        }

        var choice = available[randomInt(available.length)];
        usedPairsMap[choice.id] = true;
        saveUsedPairs();

        var flip = Math.random() < 0.5;
        return {
            civilWord: flip ? choice.pair[0] : choice.pair[1],
            undercoverWord: flip ? choice.pair[1] : choice.pair[0]
        };
    }

    function shuffle(arr) {
        var a = arr.slice();
        for (var j = a.length - 1; j > 0; j--) {
            var k = randomInt(j + 1);
            var tmp = a[j];
            a[j] = a[k];
            a[k] = tmp;
        }
        return a;
    }

    function getPlayer(id) {
        return state.players.filter(function (p) {
            return p.id === id;
        })[0];
    }

    function assignRoles() {
        var words = pickWordPair();
        clampRoleCounts();
        var total = state.players.length;
        var cap = maxImpostors(total);
        var undercoverCount = clamp(state.undercoverCount, MIN_UNDERCOVER, cap);
        var mrWhiteCount = clamp(state.mrWhiteCount, 0, Math.max(0, cap - undercoverCount));

        var allIds = state.players.map(function (p) {
            return p.id;
        });
        var shuffledImpostors = shuffle(allIds).slice(0, undercoverCount + mrWhiteCount);
        var undercoverIds = {};
        var mrWhiteIds = {};
        shuffledImpostors.forEach(function (id, idx) {
            if (idx < undercoverCount) undercoverIds[id] = true;
            else mrWhiteIds[id] = true;
        });

        state.players.forEach(function (player) {
            player.isUndercover = !!undercoverIds[player.id];
            player.isMrWhite = !!mrWhiteIds[player.id];
            player.word = player.isMrWhite ? '' : (player.isUndercover ? words.undercoverWord : words.civilWord);
            player.viewed = false;
            player.eliminated = false;
            player.isIdiot = false;
            player.isFantome = false;
            player.isMime = false;
            player.isProcureur = false;
            player.loverId = null;
        });

        var usedForSpecial = {};
        var skippedRoles = [];

        function availableIds(ids) {
            return ids.filter(function (id) {
                return !usedForSpecial[id];
            });
        }

        if (state.roles.idiot) {
            var civilIds = availableIds(state.players.filter(function (p) {
                return !p.isUndercover && !p.isMrWhite;
            }).map(function (p) {
                return p.id;
            }));
            if (civilIds.length) {
                var idiotId = shuffle(civilIds)[0];
                getPlayer(idiotId).isIdiot = true;
                usedForSpecial[idiotId] = true;
            } else {
                skippedRoles.push('Idiot du village');
            }
        }
        if (state.roles.fantome) {
            var fantomeIds = availableIds(allIds);
            if (fantomeIds.length) {
                var fantomeId = shuffle(fantomeIds)[0];
                getPlayer(fantomeId).isFantome = true;
                usedForSpecial[fantomeId] = true;
            } else {
                skippedRoles.push('Fantôme');
            }
        }
        if (state.roles.mime) {
            var mimeIds = availableIds(allIds);
            if (mimeIds.length) {
                var mimeId = shuffle(mimeIds)[0];
                getPlayer(mimeId).isMime = true;
                usedForSpecial[mimeId] = true;
            } else {
                skippedRoles.push('Mime');
            }
        }
        if (state.roles.procureur) {
            var procureurIds = availableIds(allIds);
            if (procureurIds.length) {
                var procureurId = shuffle(procureurIds)[0];
                getPlayer(procureurId).isProcureur = true;
                usedForSpecial[procureurId] = true;
            } else {
                skippedRoles.push('Procureur');
            }
        }
        if (state.roles.amoureux) {
            var amoureuxIds = availableIds(allIds);
            if (amoureuxIds.length >= 2) {
                var pair = shuffle(amoureuxIds).slice(0, 2);
                getPlayer(pair[0]).loverId = pair[1];
                getPlayer(pair[1]).loverId = pair[0];
                usedForSpecial[pair[0]] = true;
                usedForSpecial[pair[1]] = true;
            } else {
                skippedRoles.push('Les Amoureux');
            }
        }

        state.phase = 'reveal';
        state.pendingEliminationId = null;
        state.voteCount = 0;
        state.winner = null;
        state.winnerDetail = '';

        if (skippedRoles.length) {
            showToast('Pas assez de joueurs disponibles pour attribuer : ' + skippedRoles.join(', ') + '.');
        }
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
                isMrWhite: false,
                word: '',
                viewed: false,
                eliminated: false,
                isIdiot: false,
                isFantome: false,
                isMime: false,
                isProcureur: false,
                loverId: null
            };
        });
        state.round = 1;
        assignRoles();
        switchToGameScreen();
    }

    function resetStageUI() {
        el.tableNote.style.display = '';
        el.cardsGrid.style.display = '';
        el.statusBanner.classList.remove('status-banner--show');
        el.voteSection.classList.remove('vote-section--active');
        el.gameOverBanner.classList.remove('game-over-banner--active', 'game-over-banner--civils', 'game-over-banner--undercover');
        el.startVoteBtn.style.display = '';
        el.startVoteBtn.disabled = true;
        el.summaryBtn.classList.add('summary-btn--hidden');
    }

    function switchToGameScreen() {
        el.setupScreen.classList.remove('screen--active');
        el.gameScreen.classList.add('screen--active');
        resetStageUI();
        renderGameHeader();
        renderCards();
    }

    el.startBtn.addEventListener('click', function () {
        if (state.playerCount < MIN_PLAYERS) {
            showToast('Il faut au moins ' + MIN_PLAYERS + ' joueurs pour lancer une manche.');
            return;
        }
        if (!selectedThemeKeys().length) {
            showToast('Sélectionnez au moins un thème de mots avant de lancer la manche.');
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
        if (state.phase === 'reveal') {
            el.startVoteBtn.disabled = !allViewed;
        }
        el.statusBanner.classList.toggle('status-banner--show', allViewed && state.phase === 'reveal');
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
        var player = getPlayer(id);
        if (!player || player.viewed) return;

        state.openCardId = id;
        el.modalOwner.textContent = 'Carte de ' + player.name;

        if (player.isMrWhite) {
            el.modalRole.textContent = 'Tu es Mr. White — improvise, tu n\'as pas de mot !';
            el.modalWord.textContent = 'Aucun mot';
        } else if (player.isUndercover) {
            el.modalRole.textContent = 'Tu es l\'Undercover — fonds-toi dans la masse';
            el.modalWord.textContent = player.word;
        } else {
            el.modalRole.textContent = 'Tu es Civil — retrouve l\'imposteur';
            el.modalWord.textContent = player.word;
        }

        renderModalBadges(player);

        el.wordModal.classList.add('modal--open');
        el.wordModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        el.hideWordBtn.focus();
        announce('Mot révélé pour ' + player.name);
    }

    function renderModalBadges(player) {
        el.modalBadges.innerHTML = '';
        var badges = [];
        if (player.isIdiot) badges.push(ROLE_INFO.idiot);
        if (player.isFantome) badges.push(ROLE_INFO.fantome);
        if (player.isMime) badges.push(ROLE_INFO.mime);
        if (player.isProcureur) badges.push(ROLE_INFO.procureur);
        if (player.loverId !== null) {
            var lover = getPlayer(player.loverId);
            if (lover) {
                badges.push({
                    label: 'Amoureux de ' + lover.name,
                    desc: 'Si l\'un de vous deux est éliminé, l\'autre l\'est aussi. Peu importe vos camps respectifs, vous devez être les deux derniers survivants pour gagner ensemble.'
                });
            }
        }
        badges.forEach(function (b) {
            var div = document.createElement('div');
            div.className = 'modal__badge';
            var strong = document.createElement('strong');
            strong.textContent = b.label;
            var span = document.createElement('span');
            span.textContent = b.desc;
            div.appendChild(strong);
            div.appendChild(span);
            el.modalBadges.appendChild(div);
        });
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

    function alivePlayers() {
        return state.players.filter(function (p) {
            return !p.eliminated;
        });
    }

    function enterVotePhase() {
        state.phase = 'vote';
        el.tableNote.style.display = 'none';
        el.cardsGrid.style.display = 'none';
        el.statusBanner.classList.remove('status-banner--show');
        el.startVoteBtn.style.display = 'none';
        el.voteSection.classList.add('vote-section--active');
        renderEliminatedList();
        renderVoteGrid();
        announce('Phase de vote lancée.');
    }

    el.startVoteBtn.addEventListener('click', function () {
        if (el.startVoteBtn.disabled) return;
        enterVotePhase();
    });

    function renderEliminatedList() {
        el.eliminatedList.innerHTML = '';
        state.players.filter(function (p) {
            return p.eliminated;
        }).forEach(function (player) {
            var chip = document.createElement('span');
            chip.className = 'eliminated-chip';
            chip.innerHTML = player.name + ' <span class="eliminated-chip__role">' +
                (player.isUndercover ? 'Undercover' : 'Civil') + '</span>';
            el.eliminatedList.appendChild(chip);
        });
    }

    function renderVoteGrid() {
        el.voteGrid.innerHTML = '';
        alivePlayers().forEach(function (player) {
            var card = document.createElement('button');
            card.type = 'button';
            card.className = 'card';
            card.style.setProperty('--rot', cardRotation(player.id));
            card.setAttribute('role', 'listitem');
            card.setAttribute('data-id', player.id);
            card.setAttribute('aria-label', 'Voter pour éliminer ' + player.name);

            var indexEl = document.createElement('span');
            indexEl.className = 'card__index';
            indexEl.textContent = '#' + (player.id + 1);

            var iconWrap = document.createElement('span');
            iconWrap.innerHTML = CARD_ICON;

            var nameEl = document.createElement('span');
            nameEl.className = 'card__name';
            nameEl.textContent = player.name;

            card.appendChild(indexEl);
            card.appendChild(iconWrap);
            card.appendChild(nameEl);

            card.addEventListener('click', function () {
                openVoteConfirm(player.id);
            });

            el.voteGrid.appendChild(card);
        });
    }

    function openVoteConfirm(id) {
        var player = getPlayer(id);
        if (!player) return;
        state.pendingEliminationId = id;
        el.voteConfirmName.textContent = player.name;
        el.voteConfirmModal.classList.add('modal--open');
        el.voteConfirmModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        el.voteConfirmYes.focus();
    }

    function closeVoteConfirm() {
        el.voteConfirmModal.classList.remove('modal--open');
        el.voteConfirmModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        state.pendingEliminationId = null;
    }

    el.voteConfirmCancel.addEventListener('click', closeVoteConfirm);

    el.voteConfirmYes.addEventListener('click', function () {
        var id = state.pendingEliminationId;
        if (id === null) return;
        closeVoteConfirm();
        performElimination(id);
    });

    function roleLabel(player) {
        if (player.isMrWhite) return player.name + ' était Mr. White';
        if (player.isUndercover) return player.name + ' était l\'Undercover';
        return player.name + ' était Civil';
    }

    function performElimination(id) {
        var player = getPlayer(id);
        if (!player) return;

        state.voteCount += 1;

        var eliminatedNow = [player];
        player.eliminated = true;

        if (player.loverId !== null) {
            var lover = getPlayer(player.loverId);
            if (lover && !lover.eliminated) {
                lover.eliminated = true;
                eliminatedNow.push(lover);
            }
        }

        var winner = null;
        var winnerDetail = '';

        var idiotEliminated = eliminatedNow.filter(function (p) {
            return p.isIdiot;
        })[0];
        if (state.voteCount === 1 && idiotEliminated) {
            winner = 'idiot';
            winnerDetail = idiotEliminated.name;
        } else {
            var loverSurvivor = state.players.filter(function (p) {
                if (p.eliminated || p.loverId === null) return false;
                var partner = getPlayer(p.loverId);
                return partner && !partner.eliminated;
            })[0];

            if (loverSurvivor) {
                var others = state.players.filter(function (p) {
                    return p.id !== loverSurvivor.id && p.id !== loverSurvivor.loverId;
                });
                if (others.length && others.every(function (p) {
                        return p.eliminated;
                    })) {
                    winner = 'amoureux';
                }
            }

            if (!winner) {
                var aliveImpostor = state.players.filter(function (p) {
                    return !p.eliminated && (p.isUndercover || p.isMrWhite);
                }).length;
                var aliveCivil = state.players.filter(function (p) {
                    return !p.eliminated && !(p.isUndercover || p.isMrWhite);
                }).length;
                if (aliveImpostor === 0) winner = 'civils';
                else if (aliveCivil === 0) winner = 'undercover';
            }
        }

        state.winner = winner;
        state.winnerDetail = winnerDetail;

        var namesText = eliminatedNow.map(function (p) {
            return p.name;
        }).join(' et ');
        el.elimName.textContent = namesText + (eliminatedNow.length > 1 ? ' ont été éliminés' : ' a été éliminé(e)');
        el.elimRole.innerHTML = eliminatedNow.map(roleLabel).join('<br>');

        if (winner === 'civils') {
            el.elimContinueText.textContent = 'Tous les Undercovers et Mr. White ont été démasqués !';
            el.elimContinueBtn.textContent = 'Voir le résultat';
        } else if (winner === 'undercover') {
            el.elimContinueText.textContent = 'Il ne reste plus aucun Civil !';
            el.elimContinueBtn.textContent = 'Voir le résultat';
        } else if (winner === 'idiot') {
            el.elimContinueText.textContent = winnerDetail + ' était l\'Idiot du village et remporte la partie dès le premier vote !';
            el.elimContinueBtn.textContent = 'Voir le résultat';
        } else if (winner === 'amoureux') {
            el.elimContinueText.textContent = 'Les Amoureux sont les deux derniers survivants !';
            el.elimContinueBtn.textContent = 'Voir le résultat';
        } else {
            el.elimContinueText.textContent = 'La partie continue — au prochain vote.';
            el.elimContinueBtn.textContent = 'Continuer';
        }

        el.eliminationModal.classList.add('modal--open');
        el.eliminationModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        el.elimContinueBtn.focus();
        announce(el.elimName.textContent);
    }

    function closeEliminationModal() {
        el.eliminationModal.classList.remove('modal--open');
        el.eliminationModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    el.elimContinueBtn.addEventListener('click', function () {
        closeEliminationModal();
        if (state.winner) {
            enterGameOver(state.winner);
        } else {
            renderEliminatedList();
            renderVoteGrid();
        }
    });

    function enterGameOver(winner) {
        state.phase = 'gameover';
        el.voteSection.classList.remove('vote-section--active');
        el.startVoteBtn.style.display = 'none';
        el.summaryBtn.classList.remove('summary-btn--hidden');

        var impostorPlural = state.players.filter(function (p) {
            return p.isUndercover || p.isMrWhite;
        }).length > 1;

        if (winner === 'civils') {
            el.gameOverTitle.textContent = 'Les Civils ont gagné !';
            el.gameOverSub.textContent = impostorPlural ?
                'Tous les imposteurs ont été démasqués et éliminés.' :
                'L\'imposteur a été démasqué et éliminé.';
            el.gameOverBanner.classList.add('game-over-banner--civils');
        } else if (winner === 'undercover') {
            el.gameOverTitle.textContent = impostorPlural ? 'Les Undercovers ont gagné !' : 'L\'Undercover a gagné !';
            el.gameOverSub.textContent = 'Tous les Civils ont été éliminés avant d\'avoir démasqué l\'imposteur.';
            el.gameOverBanner.classList.add('game-over-banner--undercover');
        } else if (winner === 'idiot') {
            el.gameOverTitle.textContent = 'L\'Idiot du village a gagné !';
            el.gameOverSub.textContent = state.winnerDetail + ' a été éliminé(e) dès le tout premier vote et remporte la partie à lui/elle seul(e) !';
            el.gameOverBanner.classList.add('game-over-banner--idiot');
        } else if (winner === 'amoureux') {
            el.gameOverTitle.textContent = 'Les Amoureux ont gagné !';
            el.gameOverSub.textContent = 'Peu importe leurs camps respectifs, ils ont survécu ensemble à tous les autres joueurs !';
            el.gameOverBanner.classList.add('game-over-banner--amoureux');
        }

        el.gameOverBanner.classList.add('game-over-banner--active');
        announce(el.gameOverTitle.textContent);
    }

    function openSummary() {
        el.summaryList.innerHTML = '';
        state.players.forEach(function (player) {
            var li = document.createElement('li');

            var nameSpan = document.createElement('strong');
            nameSpan.textContent = player.name + (player.eliminated ? ' (éliminé)' : '');

            var right = document.createElement('span');
            right.style.display = 'flex';
            right.style.alignItems = 'center';
            right.style.flexWrap = 'wrap';
            right.style.gap = '6px';

            var wordSpan = document.createElement('span');
            wordSpan.textContent = player.isMrWhite ? 'Aucun mot' : player.word;
            wordSpan.style.color = 'var(--ink-soft)';
            right.appendChild(wordSpan);

            var roleSpan = document.createElement('span');
            if (player.isMrWhite) {
                roleSpan.className = 'summary-role summary-role--undercover';
                roleSpan.textContent = 'Mr. White';
            } else if (player.isUndercover) {
                roleSpan.className = 'summary-role summary-role--undercover';
                roleSpan.textContent = 'Undercover';
            } else {
                roleSpan.className = 'summary-role summary-role--civil';
                roleSpan.textContent = 'Civil';
            }
            right.appendChild(roleSpan);

            var specials = [];
            if (player.isIdiot) specials.push('Idiot du village');
            if (player.isFantome) specials.push('Fantôme');
            if (player.isMime) specials.push('Mime');
            if (player.isProcureur) specials.push('Procureur');
            if (player.loverId !== null) specials.push('Amoureux');
            specials.forEach(function (label) {
                var specialSpan = document.createElement('span');
                specialSpan.className = 'summary-role summary-role--special';
                specialSpan.textContent = label;
                right.appendChild(specialSpan);
            });

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
        resetStageUI();
        renderGameHeader();
        renderCards();
        showToast('Nouvelle manche lancée — de nouveaux mots ont été distribués.');
    }

    el.newRoundBtn.addEventListener('click', newRound);
    el.summaryNewRoundBtn.addEventListener('click', newRound);

    el.resetBtn.addEventListener('click', function () {
        state.players = [];
        state.round = 1;
        state.phase = 'reveal';
        state.winner = null;
        state.pendingEliminationId = null;
        el.gameScreen.classList.remove('screen--active');
        el.setupScreen.classList.add('screen--active');
    });

    updateCounter();
    updateUnderCounter();
    renderThemeToggles();
    renderNameFields();
})();