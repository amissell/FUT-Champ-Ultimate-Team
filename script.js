
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('add-player-form');
    let currentCardIndex = 1;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        
        const currentCardLW = document.getElementById(`card-1`);
        const currentCardST = document.getElementById(`card-2`);
        const currentCardRW = document.getElementById(`card-3`);
        const currentCardCML = document.getElementById(`card-4`);
        const currentCardCMM = document.getElementById(`card-5`);
        const currentCardCMR = document.getElementById(`card-6`);
        const currentCardLB = document.getElementById(`card-7`);
        const currentCardCBL = document.getElementById(`card-8`);
        const currentCardCBR = document.getElementById(`card-9`);
        const currentCardRB = document.getElementById(`card-10`);
        const currentCardGK = document.getElementById(`card-11`);
        
        

        
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
        console.log(playerData.position);
        
        switch (playerData.position) {
            case 'GK':
                updateCardContent(currentCardGK, playerData);
                saveToLocalStorage(playerData.name, playerData.position, playerData);
                
                break;
        
            case 'RM':
                updateCardContent(currentCardCMR, playerData);
                 saveToLocalStorage(playerData.name, playerData.position, playerData);
                break;
        
            case 'LM':
                updateCardContent(currentCardCML, playerData);
                 saveToLocalStorage(playerData.name, playerData.position, playerData);
                break;
        
            case 'CM':
                updateCardContent(currentCardCMM, playerData);
                 saveToLocalStorage(playerData.name, playerData.position, playerData);
                break;
        
            case 'CD':
                updateCardContent(currentCardCBR, playerData);
                 saveToLocalStorage(playerData.name, playerData.position, playerData);
                break;
            case 'CB':
                updateCardContent(currentCardCBL, playerData);
                 saveToLocalStorage(playerData.name, playerData.position, playerData);    
                break;
        
            case 'RB':
                updateCardContent(currentCardRB, playerData);
                 saveToLocalStorage(playerData.name, playerData.position, playerData);
                break;
        
            case 'LB':
                updateCardContent(currentCardLB, playerData);
                 saveToLocalStorage(playerData.name, playerData.position, playerData);
                break;
            case 'LW':
                updateCardContent(currentCardLW, playerData);
                 saveToLocalStorage(playerData.name, playerData.position, playerData);
                break;
            case 'RW':
                updateCardContent(currentCardRW, playerData);
                 saveToLocalStorage(playerData.name, playerData.position, playerData);
                break;
            case 'ST':
                updateCardContent(currentCardST, playerData);
                 saveToLocalStorage(playerData.name, playerData.position, playerData);
                break;
        
            default:
                break;
        }

        

        
        currentCardIndex++;
        
        
        // form.reset();
    });

    

    function saveToLocalStorage(name, position, playerData) {
        console.log(playerData);
        
        let allPlayers = JSON.parse(localStorage.getItem("players")) || {}; 
        // console.log(allPlayers);
        if (!allPlayers[position]) {
            allPlayers[position] = []; 
        }
        allPlayers[position].push(playerData); 
        console.log(allPlayers);
        localStorage.setItem("players", JSON.stringify(allPlayers)); 
        let ayers = JSON.parse(localStorage.getItem("players")) || {};
        console.log(ayers);
        
    }
    
});

function updateCardContent(card, playerData) {
    // Update player image
    card.querySelector('.player-image img').src = playerData.photo;
    card.querySelector('.player-image img').alt = playerData.name;

    // Update player name and position
    card.querySelector('.player-name').textContent = playerData.name;
    card.querySelector('.player-position').textContent = playerData.position;

    // Update logos
    card.querySelector('.country-logo img').src = playerData.nationalityFlag;
    card.querySelector('.team-logo img').src = playerData.clubLogo;

    // Update stats names
    const statsNames = card.querySelector('.stats-names').children;
    statsNames[0].textContent = 'RAT';
    statsNames[1].textContent = 'PAC';
    statsNames[2].textContent = 'SHO';
    statsNames[3].textContent = 'PAS';
    statsNames[4].textContent = 'DRI';
    statsNames[5].textContent = 'DEF';
    statsNames[6].textContent = 'PHY';

    // Update stats values
    const statsSpans = card.querySelectorAll('.player-stats span');
    statsSpans[0].textContent = playerData.rating;
    statsSpans[1].textContent = playerData.pace;
    statsSpans[2].textContent = playerData.shooting;
    statsSpans[3].textContent = playerData.passing;
    statsSpans[4].textContent = playerData.dribbling;
    statsSpans[5].textContent = playerData.defending;
    statsSpans[6].textContent = playerData.physical;
}

function populatePlayersFromLocalStorage() {
    // Retrieve all players from local storage
    const allPlayers = JSON.parse(localStorage.getItem("players")) || {};


    console.log('inside populate function');
    console.log(allPlayers);
    
    // Iterate over all positions and players
    for (const position in allPlayers) {
        if (allPlayers.hasOwnProperty(position)) {
            const players = allPlayers[position];
            
            players.forEach(playerData => {
                // Find the corresponding card for the player's position
                let currentCard;
                switch (playerData.position) {
                    case 'GK':
                        currentCard = document.getElementById('card-11');
                        break;
                    case 'RM':
                        currentCard = document.getElementById('card-6');
                        break;
                    case 'LM':
                        currentCard = document.getElementById('card-4');
                        break;
                    case 'CM':
                        currentCard = document.getElementById('card-5');
                        break;
                    case 'CD':
                        currentCard = document.getElementById('card-9');
                        break;
                    case 'CB':
                        currentCard = document.getElementById('card-8');
                        break;
                    case 'RB':
                        currentCard = document.getElementById('card-10');
                        break;
                    case 'LB':
                        currentCard = document.getElementById('card-7');
                        break;
                    case 'LW':
                        currentCard = document.getElementById('card-1');
                        break;
                    case 'RW':
                        currentCard = document.getElementById('card-3');
                        break;
                    case 'ST':
                        currentCard = document.getElementById('card-2');
                        break;
                    default:
                        console.warn(`Unknown position: ${position}`);
                        return;
                }

                // Update the card content with the player's data
                if (currentCard) {
                    updateCardContent(currentCard, playerData);
                }
            });
        }
    }
}


document.addEventListener('DOMContentLoaded', function() {
    populatePlayersFromLocalStorage();
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
