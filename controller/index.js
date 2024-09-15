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
    bone: 0,
    ammo: 2,
    gun: 1,
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
    if(readStatus("linear") === 3) {
        var audio01 = new Audio ("../sounds/doorCreak.mp3");
        audio01.onended = function () {
            document.getElementById("Butler_1Lean").style.visibility="visible";
            document.getElementById("knock1").style.visibility="hidden";
        };
        audio01.play();
    } else {
        var audio0 = new Audio ("../sounds/doorKnock.mp3");
        audio0.play();
        let linear = readStatus ("linear");
        linear += +1;
        writeStatus("linear", linear);
    }   
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
function studyRoom() {
    if(readStatus("linear") === 5) {
        var audio6 = new Audio ("../sounds/doorUnlocked.mp3");
        audio6.onended = function () {
            alert("Unlocked. You have used Mansion Key.");
            document.getElementById("studyRoomAnchor").style.visibility="visible";
            document.getElementById("studyRoomUnlockButton").style.visibility="hidden";
        };
        audio6.play();
    } else {
        var audio7 = new Audio ("../sounds/lockedDoor.mp3");
        audio7.onended = function () {
            alert("Rachel: The door's locked. Even though I could not make it out, I've just heard two men arguing about something inside. They went silent when I tried the door.");
        };
        audio7.play();
    }
}

//diningRoom Scene
/* if (readStatus("moxie") > 0) {
    document.getElementById("key_img").style.visibility="visible";
 } */
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
function bone() {
    if(readStatus("linear") === 4) {
        document.getElementById("dogFood").style.visibility="hidden";
    let bone = readStatus ("bone");
      bone += +1;
        writeStatus("bone", bone);
    alert("Food taken.");
    } else {
        alert("Butler: Oh, dear. Are you hungry?");
        alert("Rachel: Oh no! I was just lookin'. Sorry. I didn't mean to...");
        alert("Butler: Huh.");
    } 
}

//Linear Progress Tracker
if (readStatus("linear") >= 4) {//nedense bir kez run'lakdıktan sonra sayfayı geri alıp denediğimde şartı sağlamasına rağmen bu fonksiyon çalışmıyor. Çok ilginç bu dosyanın 76:39'una hata veriyor.
    document.getElementById("backDoor").style.visibility="visible";
    document.getElementById("getInside").style.visibility="hidden";
}

//Crypt :) Path
function toKrypt() {
    if (readStatus("linear") >= 10) {
        document.getElementById("riverButton").style.visibility="hidden";
        document.getElementById("riverAchor").style.visibility="visible";
    } else {
        alert("Rachel to herself: There seems to be a skull carving on the tree's surface.");
    }
}

//Graveyard
function dig1() {
    if(readStatus("linear") === 4)  {
        document.getElementById("tombstoneImg").style.visibility="visible";
        document.getElementById("dig2button").style.visibility="visible";
    }else{
        alert("Rachel: There is nothing I could find here.")
    }
    
}

function dig2() {
    
    var audio2 = new Audio ("../sounds/digginSound.mp3");
    audio2.onended = function () {
        document.getElementById("dig3button").style.visibility="visible";
        document.getElementById("earthDig1").style.visibility="visible";
        
    };
    audio2.play();
}
function dig3() {
    var audio3 = new Audio ("../sounds/digginSound.mp3");
    audio3.onended = function () {
        document.getElementById("dig4button").style.visibility="visible";
        document.getElementById("earthDig2").style.visibility="visible";
    };
    audio3.play();
}
function dig4() {
      
    var audio4 = new Audio ("../sounds/digginSound.mp3");
    audio4.onended = function () {
        document.getElementById("mansionKeyImg").style.visibility="visible";
    };
    audio4.play(); 
}
function takeMansionKey() {
   
    var audio5 = new Audio ("../sounds/keyPickup.mp3");
    audio5.onended = function () {
        alert("You have got the 'Mansion Key'.");
        let linear = readStatus ("linear");
        linear += +1;
        writeStatus("linear", linear);//linear should be equel to 3 at this state.
    };
    audio5.play();
        
        document.getElementById("tombstoneImg").style.visibility="hidden";
        document.getElementById("dig2button").style.visibility="hidden";
        document.getElementById("dig3button").style.visibility="hidden";
        document.getElementById("earthDig1").style.visibility="hidden";
        document.getElementById("dig4button").style.visibility="hidden";
        document.getElementById("earthDig2").style.visibility="hidden";
        document.getElementById("mansionKeyImg").style.visibility="hidden";    
}

//studyRoom
//1) Dog Mechanics
function feed() {
    var question1 = confirm("Something inside... Should I check?");
    if (readStatus("bone") === 1 && question1 === true) {     
        alert("You had the dog fed.");
        let bone = readStatus ("bone");
        bone += +1;
        writeStatus("bone", bone);//bone should be equel to 2 at this state.
        document.getElementById("dog1").style.visibility="hidden";
        document.getElementById("dog2").style.visibility="visible";
        var audio8 = new Audio ("../sounds/sniffingDog.mp3");
        audio8.play();
        console.log(question1);
    }else if (readStatus("bone") === 1 && question1 === false) {
        alert("Rachel: Curiosity killes the cat, doesn't it?");
        console.log(question1);
    } else if (readStatus("bone") === 0 && question1 === true) {
        alert("Rachel: I have nothing to attract it.");
        console.log(question1);
    } else {
        alert("Rachel: It'll not benefit me afterall.");
        console.log(question1);
    }
}
function pet() {
    var audio9 = new Audio ("../sounds/happyDogBark2.mp3");
    audio9.play();
    document.getElementById("dog2").style.visibility="hidden";
    document.getElementById("dogThanks").style.visibility="visible";
    setTimeout(function () {
        document.getElementById("dog2").style.visibility="visible";
        document.getElementById("dogThanks").style.visibility="hidden";
        audio9.play();
    }, 750);
}












//FINALLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
//bedRoomFinal

/*     document.addEventListener("keydown", function (event) {
        if(readStatus("gun") === 1) {
            console.log(event.key);
            if(event.key==="Control"){
                for(let i=0; i<=3; i++) {
                    this.getElementsByClassName("finalAim")[i].style.visibility="visible";
                }           
            }  
        } else if (readStatus("gun") >= 9) {
            console.log(event.key);
            if(event.key==="Control"){
                for(let i=0; i<=0; i++) {
                    this.getElementsByClassName("killAim")[i].style.visibility="visible";
                    
                }
                if(event.key==="s" && readStatus("ammo") >= 1) {
                    this.getElementById("rachelDead").style.visibility="visible";
                    this.getElementById("rachelAlive").style.visibility="hidden";
                    alert("Ending3");
                    //gunshot sound effect
                } else if (event.key==="k" && readStatus("ammo") >= 1 && bone===2) {
                    this.getElementById("billDead").style.visibility="visible";
                    this.getElementById("billAlive").style.visibility="hidden";
                    alert("Ending6");
                    //gunshot sound effect
                } else if (event.key==="k" && readStatus("ammo") >= 1 && bone !=2) {
                    this.getElementById("billDead").style.visibility="visible";
                    this.getElementById("billAlive").style.visibility="hidden";
                    alert("Ending5");
                    //gunshot sound effect
                } else {
                    //empty gun sound effect
                    alert("Ending4");
                }
            }  
        }
    }); */

//Chandelier
function shootChandelier() {
    if (readStatus("ammo") >= 1 ) {
        for(let i=0; i<=3; i++) {
            document.getElementsByClassName("finalAim")[i].style.visibility="hidden";
        }  
        document.getElementById("chandelierHanging").style.visibility="hidden";
        document.getElementById("fB1A").style.visibility="hidden";
        document.getElementById("fB2A").style.visibility="hidden";
        document.getElementById("fFA").style.visibility="hidden";
        document.getElementById("fB1D").style.visibility="visible";
        document.getElementById("fB2D").style.visibility="visible";
        document.getElementById("fFD").style.visibility="visible";
        document.getElementById("toBalcony").style.visibility="visible";
        document.getElementById("chandelierDropped").style.visibility="visible";
        let ammo = readStatus ("ammo");
        ammo --;
        writeStatus("ammo", ammo);
        let gun = readStatus ("gun");
        gun += +5;
        writeStatus("gun", gun);//gun should be 6 at this state.
    } else {
        for(let i=0; i<=3; i++) {
            document.getElementsByClassName("finalAim")[i].style.visibility="hidden";
        }
        alert("Rachel: I am so sorry it had to be this way. I should have ended your misery.");
        alert("Uncle: It... It's okey my dear Rachel. *Cough* *Cough* It's okey.");
        //old man crying sound effect
        //put empty gun sound effect
    }
}
//FBoss1
function shootFinalBoss1() {
    if(readStatus("ammo") >= 1) {
        document.getElementsByClassName("finalAim")[1].style.visibility="hidden";
        document.getElementById("fB1A").style.visibility="hidden";
        document.getElementById("fB1D").style.visibility="visible";
        let ammo = readStatus ("ammo");
        ammo --;
        writeStatus("ammo", ammo);
        let gun = readStatus ("gun");
        gun += +2;
        writeStatus("gun", gun);
            if(readStatus("gun") >= 5) {
                document.getElementById("toBalcony").style.visibility="visible";
            }
    } else {
        for(let i=0; i<=3; i++) {
            document.getElementsByClassName("finalAim")[i].style.visibility="hidden";
        }
        alert("Ending2");
        //put empty gun sound effect
    }
    
}

//FBoss1
function shootFinalBoss2() {
    if(readStatus("ammo") >= 1) {
        document.getElementsByClassName("finalAim")[3].style.visibility="hidden";
        document.getElementById("fB2A").style.visibility="hidden";
        document.getElementById("fB2D").style.visibility="visible";
        let ammo = readStatus ("ammo");
        ammo --;
        writeStatus("ammo", ammo);
        let gun = readStatus ("gun");
        gun += +2;
        writeStatus("gun", gun);
            if(readStatus("gun") >= 5) {
                document.getElementById("toBalcony").style.visibility="visible";
            }
    } else {
        for(let i=0; i<=3; i++) {
            document.getElementsByClassName("finalAim")[i].style.visibility="hidden";
        }
        alert("Ending2");
        //put empty gun sound effect
    }
    
}

//FFriend
function shootFinalFriend() {
    if(readStatus("ammo") >= 1) {
        document.getElementsByClassName("finalAim")[2].style.visibility="hidden";
        document.getElementById("fFA").style.visibility="hidden";
        document.getElementById("fFD").style.visibility="visible";
        let ammo = readStatus ("ammo");
        ammo --;
        writeStatus("ammo", ammo);
        let gun = readStatus ("gun");
        gun += +1;
        writeStatus("gun", gun);
            if(readStatus("gun") >= 5) {
                document.getElementById("toBalcony").style.visibility="visible";
            }
    } else {
        for(let i=0; i<=3; i++) {
            document.getElementsByClassName("finalAim")[i].style.visibility="hidden";
        }
        alert("Rachel: I am so sorry it had to be this way. I should have ended your misery.");
        alert("Uncle: It... It's okey my dear Rachel. *Cough* *Cough* It's okey.");
        //old man crying sound effect
        //put empty gun sound effect
    }
}


function point() {
    let gun = readStatus ("gun");
        gun += +3;
        writeStatus("gun", gun);
        document.getElementById("qwerty").style.visibility="hidden";
}



document.addEventListener("keydown", function (event) {
    if(event.key==="Control") {
        console.log(event.key);
        if(readStatus("gun") === 1){
            for(let i=0; i<=3; i++) {
                this.getElementsByClassName("finalAim")[i].style.visibility="visible";
            }           
        } else if (readStatus("gun") >= 9 && readStatus("gun") <= 18) {
        console.log(event.key);
        
            for(let i=0; i<=1; i++) {
                this.getElementsByClassName("killAim")[i].style.visibility="visible";
                let gun = readStatus ("gun");
                gun += +10;
                writeStatus("gun", gun);
            }
            /* document.removeEventListener("keydown", false); */
            
        } 
    }}
);

document.addEventListener("keydown", function (death) {
    if (readStatus("gun") >= 19) {
        if(death.key==="s" && readStatus("ammo") >= 1) {
            this.getElementById("rachelDead").style.visibility="visible";
            this.getElementById("rachelAlive").style.visibility="hidden";
            for(let i=0; i<=1; i++) {
                document.getElementsByClassName("killAim")[i].style.visibility="hidden";
            }   
            let ammo = readStatus ("ammo");
            ammo --;
            writeStatus("ammo", ammo); 
            alert("Ending3");
            //gunshot sound effect

        } else if (death.key==="k" && readStatus("ammo") >= 1 && bone===2) {
            this.getElementById("billDead").style.visibility="visible";
            this.getElementById("billAlive").style.visibility="hidden";
            for(let i=0; i<=1; i++) {
                document.getElementsByClassName("killAim")[i].style.visibility="hidden";
            }
            let ammo = readStatus ("ammo");
            ammo --;
            writeStatus("ammo", ammo); 
            alert("Ending6");
            //gunshot sound effect
        } else if (death.key==="k" && readStatus("ammo") >= 1 && bone !=2) {
            this.getElementById("billDead").style.visibility="visible";
            this.getElementById("billAlive").style.visibility="hidden";
            for(let i=0; i<=1; i++) {
                document.getElementsByClassName("killAim")[i].style.visibility="hidden";
            }  
            let ammo = readStatus ("ammo");
            ammo --;
            writeStatus("ammo", ammo);
            alert("Ending5");
            //gunshot sound effect
        } else if ((death.key==="k" || death.key==="s") && readStatus("ammo") <= 0) {
            
            //empty gun sound effect
            alert("Ending4");
        }
    }
});