
const questions = [

    {
        question: "Quand tu utilises un ordinateur, qu'est-ce qui t'intéresse le plus ?",
        description: "Choisis ce qui te ressemble le plus.",
        answers: [
            {
                text: "Créer des sites ou des applications",
                domain: "development"
            },
            {
                text: "Comprendre comment fonctionne l'IA",
                domain: "ai"
            },
            {
                text: "Protéger les données et les comptes",
                domain: "cyber"
            },
            {
                text: "Comprendre Internet et les réseaux",
                domain: "network"
            }
        ]
    },


    {
        question: "Quel projet aimerais-tu réaliser ?",
        description: "Imagine ton projet idéal.",
        answers: [
            {
                text: "Une application mobile",
                domain: "development"
            },
            {
                text: "Un système capable d'apprendre",
                domain: "ai"
            },
            {
                text: "Un système de protection contre les attaques",
                domain: "cyber"
            },
            {
                text: "Installer et gérer un réseau",
                domain: "network"
            }
        ]
    },


    {
        question: "Quelle activité te semble la plus intéressante ?",
        description: "Il n'y a pas de mauvaise réponse.",
        answers: [
            {
                text: "Écrire du code",
                domain: "development"
            },
            {
                text: "Analyser des données",
                domain: "data"
            },
            {
                text: "Chercher des failles de sécurité",
                domain: "cyber"
            },
            {
                text: "Configurer des serveurs",
                domain: "network"
            }
        ]
    },


    {
        question: "Quel type de problème aimerais-tu résoudre ?",
        description: "Choisis le problème qui t'attire le plus.",
        answers: [
            {
                text: "Pourquoi mon programme ne fonctionne pas ?",
                domain: "development"
            },
            {
                text: "Comment une machine peut-elle apprendre ?",
                domain: "ai"
            },
            {
                text: "Comment empêcher une attaque informatique ?",
                domain: "cyber"
            },
            {
                text: "Pourquoi le réseau ne fonctionne pas ?",
                domain: "network"
            }
        ]
    },


    {
        question: "Quelle matière préfères-tu ?",
        description: "Choisis celle qui se rapproche le plus de tes goûts.",
        answers: [
            {
                text: "Logique et programmation",
                domain: "development"
            },
            {
                text: "Mathématiques et statistiques",
                domain: "data"
            },
            {
                text: "Technologie et sécurité",
                domain: "cyber"
            },
            {
                text: "Systèmes et réseaux",
                domain: "network"
            }
        ]
    },


    {
        question: "Tu préfères travailler sur...",
        description: "Quel environnement te correspond ?",
        answers: [
            {
                text: "Un logiciel ou un site web",
                domain: "development"
            },
            {
                text: "Des modèles d'intelligence artificielle",
                domain: "ai"
            },
            {
                text: "La sécurité informatique",
                domain: "cyber"
            },
            {
                text: "Des serveurs et infrastructures",
                domain: "network"
            }
        ]
    },


    {
        question: "Quel mot te correspond le plus ?",
        description: "Choisis le mot qui t'attire.",
        answers: [
            {
                text: "Créer",
                domain: "development"
            },
            {
                text: "Innover",
                domain: "ai"
            },
            {
                text: "Protéger",
                domain: "cyber"
            },
            {
                text: "Analyser",
                domain: "data"
            }
        ]
    },


    {
        question: "Tu trouves intéressant de travailler avec...",
        description: "Quel élément t'attire le plus ?",
        answers: [
            {
                text: "Du code",
                domain: "development"
            },
            {
                text: "Des robots et systèmes intelligents",
                domain: "ai"
            },
            {
                text: "Des systèmes sécurisés",
                domain: "cyber"
            },
            {
                text: "Des tableaux et statistiques",
                domain: "data"
            }
        ]
    },


    {
        question: "Quel défi informatique voudrais-tu relever ?",
        description: "Imagine-toi dans quelques années.",
        answers: [
            {
                text: "Créer mon propre logiciel",
                domain: "development"
            },
            {
                text: "Créer une intelligence artificielle",
                domain: "ai"
            },
            {
                text: "Défendre un système informatique",
                domain: "cyber"
            },
            {
                text: "Analyser énormément de données",
                domain: "data"
            }
        ]
    },


    {
        question: "Quelle phrase te correspond le mieux ?",
        description: "Dernière question !",
        answers: [
            {
                text: "J'aime construire et créer des choses",
                domain: "development"
            },
            {
                text: "J'aime comprendre les nouvelles technologies",
                domain: "ai"
            },
            {
                text: "J'aime résoudre les problèmes de sécurité",
                domain: "cyber"
            },
            {
                text: "J'aime comprendre les informations et les chiffres",
                domain: "data"
            }
        ]
    }

];


/* ---------- DOMAINES ---------- */

const domains = {

    development: {
        name: "Développement",
        emoji: "💻",
        description:
            "Tu sembles particulièrement attiré par la création, la logique et la résolution de problèmes."
    },

    ai: {
        name: "Intelligence artificielle",
        emoji: "🤖",
        description:
            "Tu sembles aimer les nouvelles technologies, l'apprentissage automatique et les systèmes intelligents."
    },

    cyber: {
        name: "Cybersécurité",
        emoji: "🔐",
        description:
            "Tu sembles apprécier la sécurité, l'analyse des risques et la protection des systèmes informatiques."
    },

    network: {
        name: "Réseaux / systèmes",
        emoji: "🌐",
        description:
            "Tu sembles t'intéresser aux réseaux, aux serveurs et au fonctionnement des infrastructures informatiques."
    },

    data: {
        name: "Data",
        emoji: "📊",
        description:
            "Tu sembles apprécier l'analyse, les chiffres et la recherche d'informations dans les données."
    }

};


/* ---------- VARIABLES ---------- */

let currentQuestion = 0;

let scores = {

    development: 0,
    ai: 0,
    cyber: 0,
    network: 0,
    data: 0

};

let userAnswers = [];


/* ---------- ELEMENTS HTML ---------- */

const homeScreen =
    document.getElementById("home-screen");

const quizScreen =
    document.getElementById("quiz-screen");

const loadingScreen =
    document.getElementById("loading-screen");

const resultScreen =
    document.getElementById("result-screen");


const startBtn =
    document.getElementById("start-btn");

const previousBtn =
    document.getElementById("previous-button");

const nextBtn =
    document.getElementById("next-button");

const restartBtn =
    document.getElementById("restart-button");


const questionNumber =
    document.getElementById("question-number");

const questionText =
    document.getElementById("question-text");

const answersContainer =
    document.getElementById("answers-container");

const progressBar =
    document.getElementById("progress-bar");


const resultIcon =
    document.getElementById("result-icon");

const resultTitle =
    document.getElementById("result-title");

const resultDescription =
    document.getElementById("result-description");


/* =====================================================
   COMMENCER LE QUIZ
   ===================================================== */

startBtn.addEventListener("click", function () {

    homeScreen.classList.add("hidden");

    quizScreen.classList.remove("hidden");

    loadingScreen.classList.add("hidden");

    resultScreen.classList.add("hidden");


    currentQuestion = 0;

    userAnswers = [];

    resetScores();

    showQuestion();

});


/* =====================================================
   AFFICHER UNE QUESTION
   ===================================================== */

function showQuestion() {

    const question =
        questions[currentQuestion];


    /* Numéro */

    questionNumber.textContent =
        `Question ${currentQuestion + 1} / ${questions.length}`;


    /* Question */

    questionText.textContent =
        question.question;


    /* Nettoyer les anciennes réponses */

    answersContainer.innerHTML = "";


    /* Progression */

    const progress =
    ((currentQuestion + 1) / questions.length) * 100;

progressBar.style.width =
    progress + "%";


    /* Créer les réponses */

    question.answers.forEach(function (answer, index) {

        const button =
            document.createElement("button");


        button.classList.add("answer-btn");


        button.innerHTML = `
            <span class="answer-number">
                ${String.fromCharCode(65 + index)}
            </span>
            ${answer.text}
        `;


        /* Réponse déjà sélectionnée */

        if (
            userAnswers[currentQuestion] ===
            answer.domain
        ) {

            button.classList.add("selected");

        }


        /* Quand on clique */

        button.addEventListener("click", function () {

            chooseAnswer(answer.domain);

        });


        answersContainer.appendChild(button);

    });


    /* Bouton précédent */

    previousBtn.disabled =
        currentQuestion === 0;


    /* Bouton suivant */

    nextBtn.disabled =
        userAnswers[currentQuestion] === undefined;

}


/* =====================================================
   CHOISIR UNE REPONSE
   ===================================================== */

function chooseAnswer(domain) {


    /* Si une réponse existait déjà */

    if (userAnswers[currentQuestion]) {

        scores[userAnswers[currentQuestion]]--;

    }


    /* Enregistrer la nouvelle réponse */

    userAnswers[currentQuestion] =
        domain;


    /* Ajouter le point */

    scores[domain]++;


    /* Afficher le choix */

    showQuestion();


    /* Activer SUIVANT */

    nextBtn.disabled = false;

}


/* =====================================================
   QUESTION SUIVANTE
   ===================================================== */

nextBtn.addEventListener("click", function () {


    /* Impossible d'avancer sans réponse */

    if (
        userAnswers[currentQuestion] === undefined
    ) {

        return;

    }


    /* S'il reste des questions */

    if (
        currentQuestion <
        questions.length - 1
    ) {

        currentQuestion++;

        showQuestion();

    }


    /* Dernière question */

    else {

        showLoading();

    }

});


/* =====================================================
   QUESTION PRECEDENTE
   ===================================================== */

previousBtn.addEventListener("click", function () {


    if (currentQuestion > 0) {

        currentQuestion--;

        showQuestion();

    }

});


/* =====================================================
   ECRAN DE CHARGEMENT
   ===================================================== */

function showLoading() {


    /* Cacher le quiz */

    quizScreen.classList.add("hidden");


    /* Afficher le chargement */

    loadingScreen.classList.remove("hidden");


    const loadingBar =
        document.getElementById("loading-bar");


    loadingBar.style.width = "0%";


    /* Animation */

    setTimeout(function () {

        loadingBar.style.width = "100%";

    }, 100);


    /* Après l'analyse */

    setTimeout(function () {

        loadingScreen.classList.add("hidden");

        showResults();

    }, 1200);

}


/* =====================================================
   AFFICHER LE RESULTAT
   ===================================================== */

function showResults() {


    /* Trouver le meilleur domaine */

    const sortedDomains =
        Object.entries(scores)
            .sort(function (a, b) {

                return b[1] - a[1];

            });


    const mainDomain =
        sortedDomains[0][0];


    const result =
        domains[mainDomain];


    /* Remplir le résultat */

    resultIcon.textContent =
        result.emoji;


    resultTitle.textContent =
        result.name;


    resultDescription.textContent =
        result.description;


    /* Scores */

    document.getElementById(
        "development-score"
    ).textContent =
        scores.development;


    document.getElementById(
        "ai-score"
    ).textContent =
        scores.ai;


    document.getElementById(
        "cybersecurity-score"
    ).textContent =
        scores.cyber;


    document.getElementById(
        "network-score"
    ).textContent =
        scores.network;


    document.getElementById(
        "data-score"
    ).textContent =
        scores.data;


    /* Cacher les autres écrans */

    homeScreen.classList.add("hidden");

    quizScreen.classList.add("hidden");

    loadingScreen.classList.add("hidden");


    /* Afficher UNIQUEMENT le résultat */

    resultScreen.classList.remove("hidden");


    /* Progression terminée */

    progressBar.style.width =
        "100%";


    /* Descendre automatiquement vers le résultat */

    setTimeout(function () {

        resultScreen.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    }, 150);

}


/* =====================================================
   RECOMMENCER LE QUIZ
   ===================================================== */

restartBtn.addEventListener("click", function () {


    /* Cacher le résultat */

    resultScreen.classList.add("hidden");


    /* Réinitialiser */

    currentQuestion = 0;

    userAnswers = [];

    resetScores();


    /* Retour à l'accueil */

    homeScreen.classList.remove("hidden");

    quizScreen.classList.add("hidden");

    loadingScreen.classList.add("hidden");


    /* Remonter tout en haut */

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =====================================================
   RESET DES SCORES
   ===================================================== */

function resetScores() {

    scores = {

        development: 0,
        ai: 0,
        cyber: 0,
        network: 0,
        data: 0

    };

}
