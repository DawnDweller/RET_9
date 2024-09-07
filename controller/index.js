// General Functions for Status
function intilizeStatus (status) {

    let currentStatus = window.sessionStorage.getItem("status");
    currentStatus = JSON.parse(currentStatus);
    const newStatus  = Object.assign(status, currentStatus);
    window.sessionStorage.setItem("status", JSON.stringify(newStatus));

}

intilizeStatus ({
    sharpness: 0,
    courage: 0,
    moxie: 0,
    knowledge: 0,
});

function readStatus(key) {
    let currentStatus = window.sessionStorage.getItem("status");
    currentStatus = JSON.parse(currentStatus);
    return currentStatus [key];
}

function writeStatus (key, value) {
    let currentStatus = window.sessionStorage.getItem("status");
    currentStatus = JSON.parse(currentStatus);
    currentStatus [key] = value;
    window.sessionStorage.setItem("status", JSON.stringify(currentStatus));
}





//frontDoor scene
//Kapı button olcak, kapının önüne gif ile knock knock konulabilir.



function appearButler_1 () {
    document.getElementById("Butler_1Lean").style.visibility="visible";
    document.getElementById("knock1").style.visibility="hidden";
}

function seeButler_1() {
    alert("Butler: ...");
    alert("Rachel: ... Ah... Hi... I.. ahh... I was looking for the Uncle.");
    alert("Butler: ....");
    alert("Rachel: ....");
    alert("Butler: Oh! We were expecting you my dear.");
    alert("Rachel: Were you? I mean, thanks. May I come in?");
    alert("Butler: Oh hoho! Well, of course!");
    let nodeList = document.querySelectorAll("button");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.visibility = "hidden";
    }
    document.getElementById("toMainHoleFirstTime").style.visibility="visible";
    document.getElementById("Butler_1Lean").style.visibility="hidden";
}

function look() {
    alert("You saw something.");
    let moxie = readStatus("moxie");
    moxie += +5;
    writeStatus("moxie", moxie);
    alert ("You have eraned +5 moxie. Total Moxie = " + moxie);
    let nodeList = document.querySelectorAll("button");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.visibility = "hidden";
    }
}

//diningRoom Scene
if (readStatus("moxie") > 0) {
    document.getElementById("key_img").style.visibility="visible";
 }


/* document.addEventListener("click", myScript); */

//car scene
function cigarettes() {
    let cigarettes;
    cigarettes = confirm("Rachel: I love my lungs.");
    if(cigarettes==true){
        alert("Rachel: Fuck lungs. I now am alive :D");
        let sharpness = readStatus ("sharpness");
        sharpness += +2;
        writeStatus("sharpness", sharpness);
      } else {
        let moxie = readStatus("moxie");
        moxie += +2;
        writeStatus("moxie", moxie) // Burdaki moxie'yi diğer js'lerdeki ile birleştirmeliyim ama nasıl?
      }                                          //Hocam tam bu aşağıya 0 koymalısın!
    document.getElementsByClassName("cigarettes")/*   */[0]/*   */.style.visibility="hidden";
}
function map() {
    document.getElementById("map").style.visibility="visible";
    alert("Rachel: Weather is getting darker. Better take the shortcut.");
    document.getElementById("map").style.visibility="hidden";
    document.querySelector("a").style.visibility="visible";
}
