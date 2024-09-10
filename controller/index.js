// General Functions for Status
function intilizeStatus (status) {

    let currentStatus = window.sessionStorage.getItem("status");
    currentStatus = JSON.parse(currentStatus);
    const newStatus  = Object.assign(status, currentStatus);
    window.sessionStorage.setItem("status", JSON.stringify(newStatus));

}

intilizeStatus ({
    sharpness: 0,
    linear: 0,
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

//mainHole Scene
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


function chalice() {
    let chalice;
    chalice = confirm("Butler: Would you like to have some wine while you're waiting for your uncle, my dear?");
    if(chalice==true){
        alert("Rachel: Aa.. Sure. Thank you.");
        let sharpness = readStatus ("sharpness");
        sharpness += +2;
        writeStatus("sharpness", sharpness);
        
        alert("Butler: You are welcome dear. Enjoy your drink. This wine is the very finest of our marvelous collection. Do you understand?");
        alert("Rachel: I... I think... so...");
        alert("Butler: Well, I cannot emphasize how much I am glad to here that dear. You see in 1978, we have been preparing the most finest ingrediants to achive such perfection. First, a person must understand how to feel a fine wine in order to.............");
        alert("Rachel: I... I don't feel...");
        var audio2 = new Audio ("../sounds/grim1.mp3");
        audio2.play();
        document.getElementsByClassName("butler_1")[0].style.visibility="hidden";
        document.getElementsByClassName("butler_1")[1].style.visibility="hidden";
        document.getElementById("passOut").style.visibility="visible";
        

       /*  document.querySelector("html").addEventListener("keypress", disappear);
        function disappear(event) { keypress eklemeye çalıştım. Bu normalde çalışıyor ama bu kadar dallanmış donksiyonda 
        keypress'şerini console.log'a bile çıkarmıyor.
            if(event.key === "h"){
                this.style.visibility="hidden";
            } else {
                this.style.visibility="visible";
            }
                }; */
        
            document.getElementById("passOut").addEventListener("click", disappear);
            function disappear () {
                    this.style.visibility="hidden";
                }
        
        document.getElementById("mainHole2").style.visibility="visible";
        
        } else {
        let moxie = readStatus("moxie");
        moxie += +2;
        writeStatus("moxie", moxie) // Burdaki moxie'yi diğer js'lerdeki ile birleştirmeliyim ama nasıl? Tab ki de local strage ya da session Strage metodu:)
        
        var audio1 = new Audio ("../sounds/farAwayWomanScream.mp3");
        
        audio1.onended = function () {
            alert("Rachel: What was THAT?!"); 
            alert("Butler: Oh my! I better check that.");
            document.getElementById("mainHole2").style.visibility="visible";
                                                      //Hocam tam bu aşağıya 0 koymalısın!
            document.getElementsByClassName("butler_1")/*   */[0]/*   */.style.visibility="hidden";
            
        };
        audio1.play();
        
        document.getElementsByClassName("butler_1")/*   */[1]/*   */.style.visibility="hidden";
        
      }                                          
      let linear = readStatus ("linear");
      linear += +1;
        writeStatus("linear", linear);
}
function map() {
    document.getElementById("map").style.visibility="visible";
    alert("Rachel: Weather is getting darker. Better take the shortcut.");
    document.getElementById("map").style.visibility="hidden";
    document.querySelector("a").style.visibility="visible";
}




//Linear Progress Tracker
if (readStatus("linear") >= 1) {//nedense bir kez run'lakdıktan sonra sayfayı geri alıp denediğimde yartı sağlamasına rağmen bu fonksiyon çalışmıyor. Çok ilginç bu dosyanın 76:39'una hata veriyor.
    document.getElementById("backDoor").style.visibility="visible";
    document.getElementById("getInside").style.visibility="hidden";
}

//Crypt :) Path
function toKrypt() {
    if (readStatus("linear") >= 2) {
        document.getElementById("riverButton").style.visibility="hidden";
        document.getElementById("riverAchor").style.visibility="visible";
    } else {
        alert("Rachel to herself: There seems to be a skull carving on the tree's surface.");
    }
}