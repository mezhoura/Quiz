/* =====================================================
   20 QUESTIONS CIBLÉES & DÉTAILLÉES (5 DOMAINES IT)
   development | ai | cyber | network | data
   ===================================================== */
const questions = [
    {
        tag: "Intérêt Premier",
        question: "Quand tu découvres un nouveau service numérique ou une plateforme web, ton premier réflexe est de :",
        answers: [
            { text: "Regarder son ergonomie, son design et la fluidité des fonctionnalités.", domain: "development" },
            { text: "Tester ses capacités de recommandation et comprendre comment elle devine mes choix.", domain: "ai" },
            { text: "Vérifier la robustesse de l'authentification et me demander s'il y a des failles.", domain: "cyber" },
            { text: "Comprendre son infrastructure d'hébergement et la gestion du trafic en direct.", domain: "network" }
        ]
    },
    {
        tag: "Projet de Rêve",
        question: "Si tu devais mener de bout en bout un projet majeur pour ton club ou ton université :",
        answers: [
            { text: "Développer une application mobile interactive complète pour les étudiants.", domain: "development" },
            { text: "Concevoir un assistant IA capable de répondre précisément aux cours et TD.", domain: "ai" },
            { text: "Organiser un CTF (Capture The Flag) et tester la résistance des serveurs de la fac.", domain: "cyber" },
            { text: "Mettre en place un pipeline d'analyse de données pour prédire la réussite universitaire.", domain: "data" }
        ]
    },
    {
        tag: "Problème Pratique",
        question: "Quelle anomalie technique serais-tu le plus motivé à déboguer pendant des heures ?",
        answers: [
            { text: "Un bug d'affichage complexe ou une interaction utilisateur qui ne répond pas.", domain: "development" },
            { text: "Un algorithme de prédiction qui génère des erreurs de biais statistique.", domain: "ai" },
            { text: "Une tentative d'injection SQL ou un accès non autorisé dans les logs.", domain: "cyber" },
            { text: "Une perte de paquets ou une passerelle réseau saturée qui coupe les connexions.", domain: "network" }
        ]
    },
    {
        tag: "Outils & Technologies",
        question: "Parmi ces groupes de technologies, lequel t'inspire le plus ?",
        answers: [
            { text: "React, Next.js, Flutter, TypeScript, Tailwind CSS", domain: "development" },
            { text: "Python, PyTorch, TensorFlow, Scikit-Learn, OpenCV", domain: "ai" },
            { text: "Kali Linux, Wireshark, Burp Suite, Metasploit, Ghidra", domain: "cyber" },
            { text: "Docker, Kubernetes, AWS/Azure, Linux Bash, Nginx", domain: "network" }
        ]
    },
    {
        tag: "Raisonnement & Logique",
        question: "Comment aimes-tu structurer ta réflexion face à un problème inédit ?",
        answers: [
            { text: "Je décompose le problème en modules de code fonctionnels et réutilisables.", domain: "development" },
            { text: "Je cherche des patterns mathématiques ou logiques pour laisser un modèle converger.", domain: "ai" },
            { text: "J'étudie les scénarios du pire, les vulnérabilités et les vecteurs de contournement.", domain: "cyber" },
            { text: "J'explore les chiffres bruts avec des corrélations et des visualisations d'indicateurs.", domain: "data" }
        ]
    },
    {
        tag: "Quotidien Idéal",
        question: "Dans quel type d'environnement te vois-tu passer le plus clair de ton temps ?",
        answers: [
            { text: "Dans un IDE moderne en train de prototyper et bâtir des fonctionnalités.", domain: "development" },
            { text: "Dans un notebook Jupyter à entraîner et affiner des modèles d'apprentissage.", domain: "ai" },
            { text: "Dans un terminal de monitoring sécurité à scruter des alertes et des paquets réseau.", domain: "cyber" },
            { text: "Dans une console d'orchestration cloud et de serveurs virtualisés.", domain: "network" }
        ]
    },
    {
        tag: "Impact Technologique",
        question: "Quelle révolution technologique récente te fascine le plus ?",
        answers: [
            { text: "L'émergence des Progressive Web Apps et des frameworks front ultra-rapides.", domain: "development" },
            { text: "Les LLM génératifs, les agents autonomes et la vision par ordinateur.", domain: "ai" },
            { text: "La cyberguerre moderne, les protocoles Zero-Trust et la cryptographie post-quantique.", domain: "cyber" },
            { text: "Le Cloud Native, la conteneurisation et le déploiement continu automatisé.", domain: "network" }
        ]
    },
    {
        tag: "Traitement de l'Information",
        question: "Quand on te parle de 10 millions de données utilisateur, tu penses immédiatement à :",
        answers: [
            { text: "Comment concevoir une base de données performante pour que l'app reste rapide.", domain: "development" },
            { text: "Les tendances cachées et les insights que l'on peut extraire avec des graphiques.", domain: "data" },
            { text: "Les risques de fuite de données et le chiffrement nécessaire pour les protéger.", domain: "cyber" },
            { text: "L'architecture distribuée nécessaire pour stocker ces volumes sans saturation.", domain: "network" }
        ]
    },
    {
        tag: "Matière Universitaire",
        question: "Quel cours théorique capterait le plus ton attention lors d'un semestre ?",
        answers: [
            { text: "Génie logiciel, patrons de conception (Design Patterns) et architecture logicielle.", domain: "development" },
            { text: "Probabilités, algèbre linéaire et optimisation pour le Machine Learning.", domain: "ai" },
            { text: "Cryptographie appliquée, analyse forensique et sécurité des systèmes d'exploitation.", domain: "cyber" },
            { text: "Statistiques inférentielles, modélisation de données et Data Mining.", domain: "data" }
        ]
    },
    {
        tag: "Hackathon & Challenge",
        question: "Dans un hackathon de 48 heures, quel rôle choisis-tu naturellement dans l'équipe ?",
        answers: [
            { text: "Le Lead Dev : je produis l'interface et le cœur de l'application utilisable.", domain: "development" },
            { text: "Le Spécialiste IA : j'intègre le moteur d'apprentissage ou le modèle NLP.", domain: "ai" },
            { text: "L'expert Sécurité : je sécurise les API, les clés privées et les accès aux données.", domain: "cyber" },
            { text: "Le DevOps : je déploie l'infra sur le Cloud et j'assure la haute disponibilité.", domain: "network" }
        ]
    },
    {
        tag: "Loisir & Curiosité",
        question: "Pendant ton temps libre, quelle vidéo YouTube ou quel tutoriel cliques-tu en premier ?",
        answers: [
            { text: '« Créer une application complète Full-Stack moderne en 2 heures »', domain: "development" },
            { text: '« Comment fonctionnent les réseaux neuronaux profonds et les Transformers »', domain: "ai" },
            { text: '« Comment des hackers ont piraté une multinationale grâce à une simple faille »', domain: "cyber" },
            { text: '« Découvrir des insights cachés dans les statistiques de la Coupe du Monde »', domain: "data" }
        ]
    },
    {
        tag: "Objectif de Carrière",
        question: "Quel titre de poste correspond le mieux à ton ambition professionnelle ?",
        answers: [
            { text: "Full-Stack Engineer / Architecte Logiciel", domain: "development" },
            { text: "AI Research Scientist / Machine Learning Engineer", domain: "ai" },
            { text: "Ingénieur Cybersécurité / Consultant Pentester / Analyste SOC", domain: "cyber" },
            { text: "Cloud Solutions Architect / Ingénieur Systèmes & Réseaux", domain: "network" }
        ]
    },
    {
        tag: "Approche Mathématique",
        question: "Quel usage des mathématiques te paraît le plus motivant ?",
        answers: [
            { text: "La logique discrète pour écrire des algorithmes de tri ou de parcours de graphes.", domain: "development" },
            { text: "Les calculs matriciels et l'optimisation par descente de gradient.", domain: "ai" },
            { text: "L'arithmétique modulaire et la théorie des nombres pour chiffrer des messages.", domain: "cyber" },
            { text: "L'analyse statistique pour tester des hypothèses de corrélation sur des populations.", domain: "data" }
        ]
    },
    {
        tag: "Gestion de Crise",
        question: "Une entreprise subit une panne majeure. Quelle mission acceptes-tu en priorité ?",
        answers: [
            { text: "Corriger le commit défaillant qui casse l'expérience des clients.", domain: "development" },
            { text: "Réagir à un comportement imprévu d'un modèle automatisé de scoring.", domain: "ai" },
            { text: "Endiguer une attaque DDoS ou isoler un ransomware avant qu'il ne se propage.", domain: "cyber" },
            { text: "Restaurer les sauvegardes, rerouter les flux DNS et relancer les serveurs cluster.", domain: "network" }
        ]
    },
    {
        tag: "Philosophie Personnelle",
        question: "Quelle phrase résume le mieux ton état d'esprit technique ?",
        answers: [
            { text: "« Si cela peut être imaginé, cela peut être programmé et livré aux utilisateurs. »", domain: "development" },
            { text: "« Les machines ne doivent pas juste exécuter des ordres, elles doivent apprendre. »", domain: "ai" },
            { text: "« La sécurité n'est pas un produit, c'est un processus permanent de vigilance. »", domain: "cyber" },
            { text: "« Sans les données et leur bonne interprétation, vous n'êtes qu'une personne de plus avec une opinion. »", domain: "data" }
        ]
    },
    {
        tag: "Sensibilité Matériel & Infra",
        question: "Si on t'offre un laboratoire informatique équipé, quel équipement examines-tu d'abord ?",
        answers: [
            { text: "Un poste de travail double écran calibré avec une fluidité maximale pour coder.", domain: "development" },
            { text: "Un cluster de puissantes cartes graphiques (GPU) dédiées au calcul intensif.", domain: "ai" },
            { text: "Des switchs manageables, des firewalls physiques et des câblages fibre optique.", domain: "network" },
            { text: "Un serveur de stockage NAS massif avec des pétaoctets de bases de données.", domain: "data" }
        ]
    },
    {
        tag: "Sens du Détail",
        question: "Quelle qualité d'excellence t'apporte la plus grande fierté ?",
        answers: [
            { text: "Avoir un code propre, lisible, modulaire et sans avertissement.", domain: "development" },
            { text: "Atteindre un taux de précision supérieur à 98% sur un jeu de test difficile.", domain: "ai" },
            { text: "Avoir audité un système complet sans y laisser passer la moindre brèche.", domain: "cyber" },
            { text: "Garantir un uptime de serveur de 99.99% sans aucune interruption de service.", domain: "network" }
        ]
    },
    {
        tag: "Enjeux de Société",
        question: "Quel débat éthique contemporain te touche le plus ?",
        answers: [
            { text: "L'accessibilité numérique et l'égalité d'accès aux applications pour tous.", domain: "development" },
            { text: "L'impact des algorithmes autonomes sur le travail humain et l'alignement de l'IA.", domain: "ai" },
            { text: "Le respect de la vie privée, la surveillance de masse et les droits numériques.", domain: "cyber" },
            { text: "La souveraineté des données personnelles exploitées par les géants du web.", domain: "data" }
        ]
    },
    {
        tag: "Découverte de Bug",
        question: "Face à une application bancaire qui présente un comportement bizarre, tu te demandes :",
        answers: [
            { text: "Comment les ingénieurs ont structuré leur état applicatif côté front.", domain: "development" },
            { text: "Si un système de détection de fraude intelligent est en train d'analyser mes actions.", domain: "ai" },
            { text: "Si un attaquant pourrait intercepter mes requêtes via un proxy malveillant.", domain: "cyber" },
            { text: "Quel volume de transactions cette plateforme encaisse par seconde sans planter.", domain: "network" }
        ]
    },
    {
        tag: "Vision Finale",
        question: "Dans 5 ans, qu'aimerais-tu avoir construit ?",
        answers: [
            { text: "Une plateforme logicielle ou SaaS adoptée quotidiennement par des milliers d'usagers.", domain: "development" },
            { text: "Un modèle intelligent qui résout des diagnostics médicaux ou assiste la recherche.", domain: "ai" },
            { text: "Une armure défensive inviolable protégeant des infrastructures critiques d'un pays.", domain: "cyber" },
            { text: "Des tableaux décisionnels stratégiques guidant les décisions majeures d'une organisation.", domain: "data" }
        ]
    }
];

/* =====================================================
   DOMAINES & PROFILS DÉTAILLÉS
   ===================================================== */
const domains = {
    development: {
        name: "Développement Web & Logiciel",
        emoji: "💻",
        description: "Tu as l'âme d'un bâtisseur de solutions ! Ton esprit est guidé par la conception, la logique des structures et l'expérience utilisateur. Tu t'épanouiras en créant des applications web, mobiles et des architectures logicielles complètes."
    },
    ai: {
        name: "Intelligence Artificielle & Data Science",
        emoji: "🤖",
        description: "Tu es fasciné par l'apprentissage machine, les algorithmes prédictifs et les modèles intelligents. Tu possèdes un esprit curieux et novateur, taillé pour concevoir les technologies de pointe de demain (LLM, vision, robotique)."
    },
    cyber: {
        name: "Cybersécurité & Hacking Éthique",
        emoji: "🔐",
        description: "Tu es le gardien du monde numérique ! Ton esprit analytique adore explorer les failles, comprendre les protocoles de défense et anticiper les cybermenaces pour sécuriser les données et les infrastructures stratégiques."
    },
    network: {
        name: "Réseaux, Systèmes & Cloud",
        emoji: "🌐",
        description: "Tu aimes maîtriser ce qui fait tourner le monde numérique en coulisses : serveurs, conteneurs, architectures cloud et autoroutes de l'information. Sans des profils comme toi, aucun service moderne ne pourrait rester en ligne."
    },
    data: {
        name: "Big Data & Business Intelligence",
        emoji: "📊",
        description: "Tu as le flair pour donner du sens au chaos des données brutes ! Ton profil excelle dans la modélisation statistique, l'analyse descriptive et l'aide à la décision stratégique à travers les flux de données massifs."
    }
};

/* =====================================================
   ÉTAT DE L'APPLICATION
   ===================================================== */
let currentQuestionIndex = 0;
let userAnswers = new Array(questions.length).fill(null);
let scores = { development: 0, ai: 0, cyber: 0, network: 0, data: 0 };

/* =====================================================
   ÉLÉMENTS DU DOM
   ===================================================== */
const homeScreen = document.getElementById("home-screen");
const quizScreen = document.getElementById("quiz-screen");
const loadingScreen = document.getElementById("loading-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const previousBtn = document.getElementById("previous-button");
const nextBtn = document.getElementById("next-button");
const restartBtn = document.getElementById("restart-button");

const questionNumber = document.getElementById("question-number");
const questionTag = document.getElementById("question-tag");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const progressBar = document.getElementById("progress-bar");

const resultIcon = document.getElementById("result-icon");
const resultTitle = document.getElementById("result-title");
const resultDescription = document.getElementById("result-description");

/* =====================================================
   ÉVÉNEMENTS PRINCIPAUX
   ===================================================== */
startBtn.addEventListener("click", () => {
    homeScreen.classList.add("hidden");
    resultScreen.classList.add("hidden");
    loadingScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    currentQuestionIndex = 0;
    userAnswers.fill(null);
    resetScores();
    renderQuestion();
});

function renderQuestion() {
    const q = questions[currentQuestionIndex];

    // Mise à jour de l'en-tête de la question
    questionNumber.textContent = `Question ${currentQuestionIndex + 1} / ${questions.length}`;
    questionTag.textContent = q.tag || "Orientation";
    questionText.textContent = q.question;

    // Progression
    const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;

    // Génération des réponses
    answersContainer.innerHTML = "";
    q.answers.forEach((ans, idx) => {
        const btn = document.createElement("button");
        btn.classList.add("answer-btn");

        const letter = String.fromCharCode(65 + idx);
        btn.innerHTML = `
            <span class="answer-letter">${letter}</span>
            <span class="answer-label">${ans.text}</span>
        `;

        if (userAnswers[currentQuestionIndex] === ans.domain) {
            btn.classList.add("selected");
        }

        btn.addEventListener("click", () => {
            selectAnswer(ans.domain);
        });

        answersContainer.appendChild(btn);
    });

    // Gestion de l'état des boutons
    previousBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = userAnswers[currentQuestionIndex] === null;

    if (currentQuestionIndex === questions.length - 1) {
        nextBtn.innerHTML = "Voir mon profil 🎯";
    } else {
        nextBtn.innerHTML = "Continuer →";
    }
}

function selectAnswer(domain) {
    userAnswers[currentQuestionIndex] = domain;
    renderQuestion();
}

nextBtn.addEventListener("click", () => {
    if (userAnswers[currentQuestionIndex] === null) return;

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
    } else {
        calculateScores();
        showLoadingScreen();
    }
});

previousBtn.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }
});

function calculateScores() {
    resetScores();
    userAnswers.forEach(domain => {
        if (domain && scores[domain] !== undefined) {
            scores[domain]++;
        }
    });
}

function showLoadingScreen() {
    quizScreen.classList.add("hidden");
    loadingScreen.classList.remove("hidden");

    const loadingBar = document.getElementById("loading-bar");
    loadingBar.style.width = "0%";

    setTimeout(() => {
        loadingBar.style.width = "100%";
    }, 100);

    setTimeout(() => {
        loadingScreen.classList.add("hidden");
        displayFinalResults();
    }, 1300);
}

function displayFinalResults() {
    // Trier les domaines par score décroissant
    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    const topDomainKey = sorted[0][0];
    const topDomain = domains[topDomainKey];

    // Affichage principal
    resultIcon.textContent = topDomain.emoji;
    resultTitle.textContent = topDomain.name;
    resultDescription.textContent = topDomain.description;

    // Calcul des pourcentages
    const totalAnswered = questions.length;
    const calcPercent = (val) => Math.round((val / totalAnswered) * 100);

    const devPct = calcPercent(scores.development);
    const aiPct = calcPercent(scores.ai);
    const cyberPct = calcPercent(scores.cyber);
    const netPct = calcPercent(scores.network);
    const dataPct = calcPercent(scores.data);

    // Remplissage des valeurs textuelles
    document.getElementById("development-score").textContent = `${devPct}%`;
    document.getElementById("ai-score").textContent = `${aiPct}%`;
    document.getElementById("cybersecurity-score").textContent = `${cyberPct}%`;
    document.getElementById("network-score").textContent = `${netPct}%`;
    document.getElementById("data-score").textContent = `${dataPct}%`;

    // Animation des barres de progression
    setTimeout(() => {
        document.getElementById("bar-dev").style.width = `${devPct}%`;
        document.getElementById("bar-ai").style.width = `${aiPct}%`;
        document.getElementById("bar-cyber").style.width = `${cyberPct}%`;
        document.getElementById("bar-network").style.width = `${netPct}%`;
        document.getElementById("bar-data").style.width = `${dataPct}%`;
    }, 150);

    resultScreen.classList.remove("hidden");

    // Scroll vers le résultat sur petit écran
    resultScreen.scrollIntoView({ behavior: "smooth" });
}

restartBtn.addEventListener("click", () => {
    resultScreen.classList.add("hidden");
    homeScreen.classList.remove("hidden");
    currentQuestionIndex = 0;
    userAnswers.fill(null);
    resetScores();
    window.scrollTo({ top: 0, behavior: "smooth" });
});

function resetScores() {
    scores = {
        development: 0,
        ai: 0,
        cyber: 0,
        network: 0,
        data: 0
    };
}
