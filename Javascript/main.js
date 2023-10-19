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
    // Ajoute le bonus de clic au nombre d'ADN
    nbADN += bonusClic;
    // Met à jour le texte du compteur d'ADN
    elemNbADN.textContent = nbADN;
});
// Bonus de clicks
boutonAcheterBonusClic.addEventListener("click", () => {
    // Vérifiez si tu as suffisamment d'ADN pour acheter un bonus de clic
    if (nbADN >= prixBonusClic) {
        // Déduit le coût du bonus de clic
        nbADN -= prixBonusClic;
        // Augmente le nombre de points par clic
        bonusClic++;
        // Augmente le prix du bonus de clic
        prixBonusClic *= 2;
        // Met à jour le texte des compteurs et du prix
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
        // Déduit le coût de l'auto-clicker
        nbADN -= prixAutoClicker;
        // Augmente le nombre d'auto-clickers
        nbAutoClickers++;
        // Augmente le prix de l'auto-clicker pour le prochain achat
        prixAutoClicker *= 2;
        // Met à jour le texte des compteurs et du prix
        elemNbADN.textContent = nbADN;
        elemNbAutoClickers.textContent = nbAutoClickers;
        elemPrixAutoClicker.textContent = prixAutoClicker;
        // Démarre l'autoclicker
        demarrerAutoClicker();
    } else {
        alert("Tu n'as pas suffisamment d'ADN pour acheter un auto-clicker !");
    }
});

// Changer d'époque
boutonChangerEpoque.addEventListener("click", () => {
    if (epoque === 0) {
        if (nbADN >= coutChangementEpoque) {
            // Vérifiez si il y a suffisamment d'ADN pour changer d'époque
            nbADN -= coutChangementEpoque;
            coutChangementEpoque *= 2; // Augmente le coût du changement d'époque

            // Met à jour l'apparence de l'image et de l'arrière-plan
            boutonCookie.innerHTML = '<img src="image/préhistoire.png" alt="Cookie">';
            document.body.style.backgroundImage = 'url("image/préhistoire.jpg")';
            epoque = 1;
        } else {
            alert("Tu n'as pas suffisamment d'ADN pour changer d'époque !");
        }
    } else if (epoque === 1) {
        // Autre époque
        if (nbADN >= coutChangementEpoque) {

            nbADN -= coutChangementEpoque;
            coutChangementEpoque *= 2;

            boutonCookie.innerHTML = '<img src="image/antiquité.png" alt="Cookie">';
            document.body.style.backgroundImage = 'url("image/antiquité.jpg")';
            epoque = 2;// Change l'époque à autre époque
        } else {
            alert("Tu n'as pas suffisamment d'ADN pour changer d'époque !");
        }
    }
    else if (epoque === 2) {
        if (nbADN >= coutChangementEpoque) {

            nbADN -= coutChangementEpoque;
            coutChangementEpoque *= 2;

            boutonCookie.innerHTML = '<img src="image/m-a.png" alt="Cookie">';
            document.body.style.backgroundImage = 'url("image/m-a.jpg")';
            epoque = 3;
        } else {
            alert("Tu n'as pas suffisamment d'ADN pour changer d'époque !");
        }
    }
    else if (epoque === 3) {
        if (nbADN >= coutChangementEpoque) {

            nbADN -= coutChangementEpoque;
            coutChangementEpoque *= 2;

            boutonCookie.innerHTML = '<img src="image/renaissance.png" alt="Cookie">';
            document.body.style.backgroundImage = 'url("image/renaissance.jpg")';
            epoque = 4;
        } else {
            alert("Tu n'as pas suffisamment d'ADN pour changer d'époque !");
        }
    }
    // Met à jour le compteur d'ADN et le prix affiché
    elemNbADN.textContent = nbADN;
    eraChangeCost.textContent = coutChangementEpoque;
});

// Fonction pour gérer l'autoclicker
let intervalAutoClicker;

function demarrerAutoClicker() {
    if (!intervalAutoClicker) {
        intervalAutoClicker = setInterval(() => {
            // Ajoute le bonus de clic au nombre d'ADN
            nbADN += bonusClic;

            // Met à jour le texte du compteur d'ADN
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
    nbADN += 10;
    elemNbADN.textContent = nbADN;
    bonusADN.style.display = "none";
});

setInterval(afficherBonusADN, 5000);