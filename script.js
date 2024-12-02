
const PlayerPosition = document.getElementById("player-position");
const playerPhoto = document.getElementById("player-photo")
const playerFlag = document.getElementById("player-flag")
const playerLogo = document.getElementById("player-logo")
const playerClub = document.getElementById("player-club")
const playerRating = document.getElementById("player-rating")
const playerPace = document.getElementById("player-pace")
const playerDefending = document.getElementById("player-defending")
const playerDribbling = document.getElementById("player-dribbling")
const playerName = document.getElementById("player-name")
const playerPassing = document.getElementById("player-pace")
const playerPhysical = document.getElementById("player-pace")
const playerShooting = document.getElementById("player-shooting")

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

        if (PlayerPosition.value === "GK") {
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

const positionsMap = [
    "cardGardien",
    "card-10",
    "card-9",
    "card-8",
    "card-7",
    "card-6",
    "card-5",
    "card-4",
    "card-3",
    "card-2",
    "card-1",
];

function addPlayer(pos) {
        
    if (!card) {
        alert("Invalid position selected!");
        return;
    }


    if (busyPositions[pos]) {
        alert("This position is already occupied!"); // Prevent adding to the same card
        return;
    }


    // Update the card's content
    card.innerHTML = `
        <img class="player-photo" src="${playerPhoto.value}" alt="${playerName.value}">
        <h3 class="player-name">${playerName.value}</h3>
        <p class="player-position">${pos}</p>
        <div class="player-nationality">
            <img src="${playerFlag.value}" alt="${playerName.value}'s Country Flag" class="nationality-flag">
        </div>
        <div class="player-club">
            <img src="${playerLogo.value}" alt="${playerClub.value}" class="club-logo">
        </div>
        <ul class="player-stats">
            <li>Rat<span class="rating">${playerRating.value}</span></li>
            <li>Pac<span class="pace">${playerPace}</span></li>
            <li>Sho<span class="shooting">${playerShooting.value}</span></li>
            <li>Pas<span class="passing">${playerPassing.value}</span></li>
            <li>Dri<span class="dribbling">${playerDribbling.value}</span></li>
            <li>Def<span class="defending">${playerDefending.value}</span></li>
            <li>Phy<span class="physical">${playerPhysical.value}</span></li>
        </ul>
    `;

    busyPositions[pos] = true;

    document.getElementById("add-player-form").reset();
}

document.getElementById("add-player-form").addEventListener("submit", (e) => {
    e.preventDefault(); 
    
    const selectedPosition = PlayerPosition.value; 
    
    if (positionsMap[selectedPosition]) {
        addPlayer(selectedPosition); 
    } else {
        alert("Invalid position selected!"); // Show error if position is not valid
    }
});

















// personal info form
// const validationPersonalInfoForm = {
//     fullname: {
//         regex: /^[a-zA-Z\s]{2,10}$/,
//         message: "the name must contain at least 5 charachters",
//     },
//     flag: {
//         regex: /^https?:\/\/.*\/.*\.(png|webp|jpeg|jpg)\??.*$/,
//         message: "select .jpg .png .webp .jpeg files",
//     },
//     club: {
//         regex: /^https?:\/\/.*\/.*\.(png|webp|jpeg|jpg)\??.*$/,
//         message: "select .jpg .png .webp .jpeg files",
//     },
// };


// document.getElementById('player-form').addEventListener('submit', function(event) {
//     event.preventDefault();  
//     validateForm();
// });

// function validateForm() {
//     const photoURL = document.getElementById('player-photo').value;
//     const flagURL = document.getElementById('player-flag').value;
    
//     if (!isValidURL(photoURL)) {
//         alert('Please enter a valid Player Photo URL.');
//         return;
//     }

//     if (!isValidURL(flagURL)) {
//         alert('Please enter a valid Player Flag URL.');
//         return;
//     }

//     alert('Form submitted successfully!');
//     document.getElementById('player-form').submit();  
// }

// function isValidURL(url) {
//     const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
//     return urlPattern.test(url);
// }
