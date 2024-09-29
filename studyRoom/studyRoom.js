var studyRoomBGM = new Audio ("../sounds/studyRoomBGM.mp3");
studyRoomBGM.play();

//Reading note1
function readNotes() {
    document.getElementById("documenOnTheDesk").style.visibility="visible";
}
function readNotes2() {
    document.getElementById("documenOnTheDesk").style.visibility="hidden";
}
function decideGoingBedroom() {
    alert("Rachel: I may squeeze through and reach the upper floor.");
    let achorBed;
    achorBed = confirm ("Guess this is it.");
    if (achorBed === true) {
        document.getElementById("bedRoomAnchorButton").style.visibility="hidden";
        document.getElementById("bedRoomAnchor").style.visibility="visible";
    } else {
        alert("Rachel: Or not?");
    }
}
function checkSecretLadder() {
    alert("Rachel: It is a ladder that had secretly been embeded inside the wall.");
    alert("Rachel: I can feel a cold and musty air current incoming from a dark passage.");
    alert("Rachel: Seems like it leads an uncanny place.");
}