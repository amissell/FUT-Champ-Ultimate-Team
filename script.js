
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
// const AddButtonPlayer = document.getElementById("addBtn")


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

// This code shows or hides sections based on the selected player position
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


    }
    else {
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




const busyPositions = {
    GK: false,
    LW: false,
    ST: false,
    RW: false,
    LM: false,
    CM: false,
    LB: false,
    CB: false,
    RB: false,
    RM: false,
};

const positionsMap = {
    GK: "cardGardien",
    LW: "card-7",
    ST: "card-1",
    RW: "card-8",
    LM: "card-9",
    CM: "card-6",
    LB: "card-3",
    CB: "card-2",
    RB: "card-4",
    RM: "card-10",
};

function addPlayer(event) {
    event.preventDefault(); // this to allow the function to handle the data without losing the state of the curent pg.

    const playerName = document.getElementById("player-name").value;
    const playerPosition = document.getElementById("player-position").value;
    const playerPhoto = document.getElementById("player-photo").value;
    const playerFlag = document.getElementById("player-flag").value;
    const playerClub = document.getElementById("player-club").value;
    const playerLogo = document.getElementById("player-logo").value;
    const playerRating = document.getElementById("player-rating").value;
    const playerPace = document.getElementById("player-pace").value;
    const playerShooting = document.getElementById("player-shooting").value;
    const playerPassing = document.getElementById("player-passing").value;
    const playerDribbling = document.getElementById("player-dribbling").value;
    const playerDefending = document.getElementById("player-defending").value;
    const playerPhysical = document.getElementById("player-physical").value;



    if (busyPositions[playerPosition]) {
        alert("the postion is busy!");
        return;
    }

    const cardId = positionsMap[playerPosition];
    const card = document.getElementById(cardId);

    
    
    if (!card) {
        alert("Invalid position selected!");
        return;
    }

    // Update the card's content
    card.innerHTML = `
        <img class="player-photo" src="${playerPhoto}" alt="${playerName}">
        <h3 class="player-name">${playerName}</h3>
        <p class="player-position">${playerPosition}</p>
        <div class="player-nationality">
            <img src="${playerFlag}" alt="${playerName}'s Country Flag" class="nationality-flag">
        </div>
        <div class="player-club">
            <img src="${playerLogo}" alt="${playerClub}" class="club-logo">
        </div>
        <ul class="player-stats">
            <li>Rat<span class="rating">${playerRating}</span></li>
            <li>Pac<span class="pace">${playerPace}</span></li>
            <li>Sho<span class="shooting">${playerShooting}</span></li>
            <li>Pas<span class="passing">${playerPassing}</span></li>
            <li>Dri<span class="dribbling">${playerDribbling}</span></li>
            <li>Def<span class="defending">${playerDefending}</span></li>
            <li>Phy<span class="physical">${playerPhysical}</span></li>
        </ul>
    `;

    busyPositions[playerPosition] = true;

    document.getElementById("add-player-form").reset();
}

document.getElementById("add-player-form").addEventListener("submit", addPlayer);


























// const dataPlayers = [];

// document.getElementById("add-player-form").addEventListener("submit", function (e) {
//     e.preventDefault(); 
//     // Get the data from the form
//     const playerName = document.getElementById('player-name').value;
//     const playerPosition = document.getElementById('player-position').value;
//     const playerPhoto = document.getElementById('player-photo').value; 
//     const playerFlag = document.getElementById('player-flag').value; 
//     const playerClub = document.getElementById('player-club').value;
//     const playerLogo = document.getElementById('player-logo').value; 
//     const playerRating = document.getElementById('player-rating').value;
//     const playerPace = document.getElementById('player-pace').value;
//     const playerShooting = document.getElementById('player-shooting').value;
//     const playerPassing = document.getElementById('player-passing').value;
//     const playerDribbling = document.getElementById('player-dribbling').value;
//     const playerDefending = document.getElementById('player-defending').value;
//     const playerPhysical = document.getElementById('player-physical').value;

//     // Create a new player object with the data
//     const newPlayer = {
//         name: playerName,
//         position: playerPosition,
//         playerPhoto: playerPhoto,  
//         playerFlag: playerFlag,    
//         rating: playerRating,
//         pace: playerPace,
//         shooting: playerShooting,
//         passing: playerPassing,
//         dribbling: playerDribbling,
//         defending: playerDefending,
//         physical: playerPhysical,
//         club: playerClub,
//         logo: playerLogo,

//     };

//     dataPlayers.push(newPlayer)
//     const positionOfPlayer = {
//         "GK": "cardGardien",
//         "CB": "card-2",
//         "LB": "card-3",
//         "RB": "card-4",
//         "CD": "card-5",
//         "CM": "card-6",
//         "LW": "card-7",
//         "RW": "card-8",
//         "LM": "card-9",
//         "RM": "card-10",
//         "ST": "card-1",
//     };

//     const cardId = positionOfPlayer[playerPosition];
//     const card = document.getElementById(cardId);


//     // Update the card's content
//     card.innerHTML = `
//         <img class="player-photo" src="${newPlayer.playerPhoto}" alt="${newPlayer.name}">
//         <h3 class="player-name">${newPlayer.name}</h3>
//         <p class="player-position">${newPlayer.position}</p>
//         <div class="player-nationality">
//             <img src="${newPlayer.playerFlag}" alt="${newPlayer.name}'s Country Flag" class="country-flag" />
//         </div>
//         <div class="player-club">
//             <img src="${newPlayer.clubLogo}" alt="${newPlayer.name}'s Club Logo" class="club-logo" />
//         </div>
//         <ul class="player-stats">
//             <li>Rat<span class="rating">${newPlayer.rating}</span></li>
//             <li>Pac<span class="pace">${newPlayer.pace}</span></li>
//             <li>Sho<span class="shooting">${newPlayer.shooting}</span></li>
//             <li>Pas<span class="passing">${newPlayer.passing}</span></li>
//             <li>Dri<span class="dribbling">${newPlayer.dribbling}</span></li>
//             <li>Def<span class="defending">${newPlayer.defending}</span></li>
//             <li>Phy<span class="physical">${newPlayer.physical}</span></li>
//         </ul>
//     `;
// });




