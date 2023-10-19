let nbADN = 0;
let bonusClic = 1;
let nbAutoClickers = 0;
let prixBonusClic = 10;
let prixAutoClicker = 50;
let epoque = 0;
let coutChangementEpoque = 100;


const boutonCookie = document.getElementById("cookieButton");
const elemNbADN = document.getElementById("cookieCount");
const elemBonusClic = document.getElementById("clickBonus");
const elemPrixBonusClic = document.getElementById("clickBonusPrice");
const boutonAcheterBonusClic = document.getElementById("buyClickBonus");
const elemNbAutoClickers = document.getElementById("autoClickerCount");
const elemPrixAutoClicker = document.getElementById("autoClickerPrice");
const boutonAcheterAutoClicker = document.getElementById("buyAutoClicker");
const boutonChangerEpoque = document.getElementById("changeEra");

// Ajoute un gestionnaire d'événements pour le clic
boutonCookie.addEventListener("click", () => {
    nbADN += bonusClic;
    elemNbADN.textContent = nbADN;
});
// Bonus de clicks
boutonAcheterBonusClic.addEventListener("click", () => {
    // Vérifiez si tu as suffisamment d'ADN pour acheter un bonus de clic
    if (nbADN >= prixBonusClic) {
        nbADN -= prixBonusClic;
        bonusClic++;
        prixBonusClic *= 2;
        elemNbADN.textContent = nbADN;
        elemBonusClic.textContent = bonusClic;
        elemPrixBonusClic.textContent = prixBonusClic;
    } else {
        alert("Tu n'as pas suffisamment d'ADN pour acheter un bonus de clic !");
    }
});

// Auto-clicker
boutonAcheterAutoClicker.addEventListener("click", () => {
    if (nbADN >= prixAutoClicker) {
        nbADN -= prixAutoClicker;
        nbAutoClickers++;
        prixAutoClicker *= 2;
        // Met à jour le texte des compteurs et du prix
        elemNbADN.textContent = nbADN;
        elemNbAutoClickers.textContent = nbAutoClickers;
        elemPrixAutoClicker.textContent = prixAutoClicker;

        demarrerAutoClicker();
    } else {
        alert("Tu n'as pas suffisamment d'ADN pour acheter un auto-clicker !");
    }
});

const epoques = [
    {
        bouton: "image/préhistoire.png",
        arrierePlan: "image/préhistoire.jpg"
    },
    {
        bouton: "image/antiquité.png",
        arrierePlan: "image/antiquité.jpg"
    },
    {
        bouton: "image/m-a.png",
        arrierePlan: "image/m-a.jpg"
    },
    {
        bouton: "image/renaissance.png",
        arrierePlan: "image/renaissance.jpg"
    },
    {
        bouton: "image/1800.png",
        arrierePlan: "image/1801.png"
    },
    {
        bouton: "image/1900.png",
        arrierePlan: "image/1900.jpg"
    },
    {
        bouton: "image/maintenant.png",
        arrierePlan: "image/maintenant.jpg"
    }
]

boutonChangerEpoque.addEventListener("click", () => {
    if (nbADN >= coutChangementEpoque) {
        currentEpoque = epoques[epoque];

        nbADN -= coutChangementEpoque;
        coutChangementEpoque *= 2;

        boutonCookie.innerHTML = '<img src="' + currentEpoque.bouton + '" alt="Cookie">';
        document.body.style.backgroundImage = 'url("' + currentEpoque.arrierePlan + '")';
        epoque++;

        elemNbADN.textContent = nbADN;
        eraChangeCost.textContent = coutChangementEpoque;
    }
});


// Fonction pour gérer l'autoclicker
let intervalAutoClicker;

function demarrerAutoClicker() {
    if (!intervalAutoClicker) {
        intervalAutoClicker = setInterval(() => {
            nbADN += bonusClic;

            elemNbADN.textContent = nbADN;
        }, 1000); // 1000ms (1 seconde) par clic
    }
}

// Gestion de l'image bonus qui pop sur la page
const bonusADN = document.getElementById("bonusADN");

// Fonction pour afficher l'image bonus d'ADN
function afficherBonusADN() {
    bonusADN.style.display = "block";
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);
    bonusADN.style.top = randomY + "px";
    bonusADN.style.left = randomX + "px";
}

// Ajout d'un gestionnaire d'événements pour cliquer sur l'image bonus d'ADN
bonusADN.addEventListener("click", () => {
    nbADN += 100000000;
    elemNbADN.textContent = nbADN;
    bonusADN.style.display = "none";
});

setInterval(afficherBonusADN, 5000);
