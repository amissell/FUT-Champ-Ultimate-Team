document.addEventListener('DOMContentLoaded', function () {
    const PlayerPosition = document.getElementById("player-position");
    const DivingSection = document.getElementById("diving-section");
    const PaceSection = document.getElementById("pace-section");
    const HandlingSection = document.getElementById("handling-section");
    const ShootingSection = document.getElementById("shooting-section");
    const KickingSection = document.getElementById("kicking-section");
    const PassingSection = document.getElementById("passing-section");
    const ReflexSection = document.getElementById("reflex-section");
    const DribblingSection = document.getElementById("dribbling-section");
    const SpeedSection = document.getElementById("speed-section");
    const DefendingSection = document.getElementById("defending-section");
    const PositioningSection = document.getElementById("positioning-section");
    const PhysicalSection = document.getElementById("physical-section");

    // Default display settings
    DivingSection.style.display = "none";
    PaceSection.style.display = "block";
    HandlingSection.style.display = "none";
    ShootingSection.style.display = "block";
    KickingSection.style.display = "none";
    PassingSection.style.display = "block";
    ReflexSection.style.display = "none";
    DribblingSection.style.display = "block";
    SpeedSection.style.display = "none";
    DefendingSection.style.display = "block";
    PositioningSection.style.display = "none";
    PhysicalSection.style.display = "block";

    // Change display based on player position
    PlayerPosition.addEventListener("change", function () {
        if (this.value === "GK") {
            DivingSection.style.display = "block";
            PaceSection.style.display = "none";
            HandlingSection.style.display = "block";
            ShootingSection.style.display = "none";
            KickingSection.style.display = "block";
            PassingSection.style.display = "none";
            ReflexSection.style.display = "block";
            DribblingSection.style.display = "none";
            SpeedSection.style.display = "block";
            DefendingSection.style.display = "none";
            PositioningSection.style.display = "block";
            PhysicalSection.style.display = "none";
        } else {
            DivingSection.style.display = "none";
            PaceSection.style.display = "block";
            HandlingSection.style.display = "none";
            ShootingSection.style.display = "block";
            KickingSection.style.display = "none";
            PassingSection.style.display = "block";
            ReflexSection.style.display = "none";
            DribblingSection.style.display = "block";
            SpeedSection.style.display = "none";
            DefendingSection.style.display = "block";
            PositioningSection.style.display = "none";
            PhysicalSection.style.display = "block";
        }
    });

    // Form handling and player card updates
    const form = document.getElementById('add-player-form');
    let players = [];
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const currentCardLW = document.getElementById('card-1');
        const currentCardST = document.getElementById('card-2');
        const currentCardCML = document.getElementById('card-4');
        const currentCardCMM = document.getElementById('card-5');
        const currentCardRW = document.getElementById('card-3');
        const currentCardCMR = document.getElementById('card-6');
        const currentCardLB = document.getElementById('card-7');
        const currentCardCBL = document.getElementById('card-8');
        const currentCardCBR = document.getElementById('card-9');
        const currentCardRB = document.getElementById('card-10');
        const currentCardGK = document.getElementById('card-11');

        const playerData = {
            photo: document.getElementById('player-photo').value,
            name: document.getElementById('player-name').value,
            position: document.getElementById('player-position').value,
            nationalityFlag: document.getElementById('player-nationality-flag').value,
            clubLogo: document.getElementById('player-logo').value,
            rating: document.getElementById('player-rating').value,
            pace: document.getElementById('player-pace').value,
            shooting: document.getElementById('player-shooting').value,
            passing: document.getElementById('player-passing').value,
            dribbling: document.getElementById('player-dribbling').value,
            defending: document.getElementById('player-defending').value,
            physical: document.getElementById('player-physical').value
        };

        players.push(playerData);
        console.log(players);

        // Update the correct card based on player position
        switch (playerData.position) {
            case 'GK':
                updateCardContent(currentCardGK, playerData);
                break;
            case 'RM':
                updateCardContent(currentCardCMR, playerData);
                break;
            case 'LM':
                updateCardContent(currentCardCML, playerData);
                break;
            case 'CM':
                updateCardContent(currentCardCMM, playerData);
                break;
            case 'CD':
                updateCardContent(currentCardCBR, playerData);
                break;
            case 'CB':
                updateCardContent(currentCardCBL, playerData);
                break;
            case 'RB':
                updateCardContent(currentCardRB, playerData);
                break;
            case 'LB':
                updateCardContent(currentCardLB, playerData);
                break;
            case 'LW':
                updateCardContent(currentCardLW, playerData);
                break;
            case 'RW':
                updateCardContent(currentCardRW, playerData);
                break;
            case 'ST':
                updateCardContent(currentCardST, playerData);
                break;
            default:
                break;
        }

        form.reset();
    });

    function updateCardContent(card, playerData) {
        card.querySelector('.player-image img').src = playerData.photo;
        card.querySelector('.player-name').textContent = playerData.name;
        card.querySelector('.player-position').textContent = playerData.position;
        card.querySelector('.country-logo img').src = playerData.nationalityFlag;
        card.querySelector('.team-logo img').src = playerData.clubLogo;

        const statsNames = card.querySelector('.stats-names').children;
        statsNames[0].textContent = 'RAT';
        statsNames[1].textContent = 'PAC';
        statsNames[2].textContent = 'SHO';
        statsNames[3].textContent = 'PAS';
        statsNames[4].textContent = 'DRI';
        statsNames[5].textContent = 'DEF';
        statsNames[6].textContent = 'PHY';

        const statsSpans = card.querySelectorAll('.player-stats span');
        statsSpans[0].textContent = playerData.rating;
        statsSpans[1].textContent = playerData.pace;
        statsSpans[2].textContent = playerData.shooting;
        statsSpans[3].textContent = playerData.passing;
        statsSpans[4].textContent = playerData.dribbling;
        statsSpans[5].textContent = playerData.defending;
        statsSpans[6].textContent = playerData.physical;
    }
});
