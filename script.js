// function () {
//     const playerPosition = document.getElementById("player-posi0tion");

// }


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

// DivingSection.style.display = "none";
// PaceSection.style.display = "block";
