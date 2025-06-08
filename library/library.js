function comment() {
    alert("Rachel: An intriguing book.");
    alert("Rachel: Unfortunately the amount of meticulously intricate details make it unreadable.");
}
function madFace() {
    alert("Rachel: I can see someone staring at me from the upstairs. He does not look friendly.");
    let deathWish = confirm("Rachel: I wonder what would happen if I call out?");
    if(deathWish === true) {
        var madFaceLaught = new Audio ("../sounds/madFaceLaught.mp3");
        madFaceLaught.play();
        
        document.getElementById("musicianStaring").style.visibility="hidden";
        var laughtAndScream = new Audio ("../sounds/laughtAndScream.mp3");

        document.getElementById("musicianJumpedDown").style.visibility="visible";
        setTimeout(function () {
            document.getElementById("musicianRun").style.visibility="visible";
                setTimeout(function () {
                    document.getElementById("musicianKill").style.visibility="visible";
                }, 1000);
            laughtAndScream.play();
        }, 1000);
    } else {
        alert("Rachel: I think it is wise to act like I haven't noticed him.");
    }
}