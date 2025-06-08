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
    ammo: 0,
    gun: 0,
    book1: 0,
    book2: 0,
    book3: 0,
    book4: 0,
    book5: 0,
    fenceKey: 0,
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


//Piano Mechanics
function grabFenceKey() {
    let fenceKey = readStatus ("fenceKey");
    fenceKey = 1;
    writeStatus("fenceKey", fenceKey);
    alert('Skull Carved Key found.' );
     document.getElementById("fenceKey").style.visibility="hidden";
 }


//mainHole2 Scene2
function commentOnLibraryDoor2() {
    if (readStatus("fenceKey") === 0) {
    alert("Rachel: Door's not locked. It is too dark inside.");
    alert("Seems like a library. Better check here too.");}
    document.getElementById("libraryDoorCheckButton").style.visibility="hidden";
    document.getElementById("libraryAnchor").style.visibility="visible";
}

//library
function bookPuzzle1() {
    var audiobook1 = new Audio ("../sounds/book1.mp3");
    audiobook1.play();
    alert("Rachel: I pulled the book and it got stuck.");
    document.getElementById("book1").style.visibility="hidden";
    let book1 = readStatus ("book1");
        book1 ++;
        writeStatus("book1", book1);
}
function bookPuzzle2() {
    if(readStatus("book1") === 1) {
        var audiobook2 = new Audio ("../sounds/book1.mp3");
        audiobook2.play();
        alert("Rachel: I pulled the book and it got stuck.");
        document.getElementById("book2").style.visibility="hidden";
        let book2 = readStatus ("book2");
        book2 ++;
        writeStatus("book2", book2);
    } else {
        alert("Rachel: 'Running a Nation'. A book about politics. It tells about some strategies to maintain a country.");
    }
}
function bookPuzzle3() {
    if(readStatus("book2") === 1) {
        var audiobook3 = new Audio ("../sounds/book1.mp3");
        audiobook3.play();
        alert("Rachel: I pulled the book and it got stuck.");
        document.getElementById("book3").style.visibility="hidden";
        let book3 = readStatus ("book3");
        book3 ++;
        writeStatus("book3", book3);
    } else {
        alert("Rachel: 'God's Justice'. A book about religious beliefs.");
    }
}
function bookPuzzle4() {
    if(readStatus("book3") === 1) {
        var audiobook4 = new Audio ("../sounds/book1.mp3");
        audiobook4.play();
        alert("Rachel: I pulled the book and it got stuck.");
        document.getElementById("book4").style.visibility="hidden";
        let book4 = readStatus ("book4");
        book4 ++;
        writeStatus("book4", book4);
    } else {
        alert("Rachel: 'Cold Spring'. This book tells a love story. From the looks of it, I think it has a sad ending.");
        alert("Rachel: To be honest, it is a surprise to find a book for entertainment since most of the books in here are academic ones. Most likely for research purposes.");
    }
}
function bookPuzzle5() {
    if(readStatus("book4") === 1) {
        var audiobook5 = new Audio ("../sounds/book1.mp3");
        audiobook5.play();
        alert("Rachel: I pulled the book and it got stuck.");
        document.getElementById("book5").style.visibility="hidden";
        let book5 = readStatus ("book5");
        book5 ++;
        writeStatus("book5", book5);
    } else {
        alert("Rachel: I cannot pronounce this book at all. It is written a different alphabet.");
    }
}
function bookPuzzle6() {
    if(readStatus("book5") === 1) {
        var audiobook6 = new Audio ("../sounds/book1.mp3");
        audiobook6.play();
        alert("Rachel: I pulled the book and it got stuck.");
        document.getElementById("book6").style.visibility="hidden";
        var audioLibraryLadder = new Audio ("../sounds/mechanicalCracking.mp3");

        document.getElementById("librarySecretLadderDrop").style.visibility="visible";
        setTimeout(function () {
            document.getElementById("librarySecretLadderDrop").style.visibility="hidden";
            document.getElementById("librarySecretLadder").style.visibility="visible";
            audioLibraryLadder.play();
        }, 600);
    } else {
        alert("Rachel: On the cover 'UP' is written. But the pages are blank.");
    }
}
function anchorPiano() {
    alert("Rachel: These books were connected to stairs mechanism? That was...");
    alert("Rachel: ...excessive.");
    document.getElementById("pianoRoomAnchor").style.visibility="visible";
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
    if (readStatus("fenceKey") === 1) {
        document.getElementById("riverButton").style.visibility="hidden";
        document.getElementById("riverAchor").style.visibility="visible";
    } else {
        alert("Rachel: There seems to be a skull carving on the fence gate's surface.");
    }
}

//Graveyard
function dig1() {
    if(readStatus("linear") === 4)  {
        document.getElementById("tombstoneImg").style.visibility="visible";
        document.getElementById("dig2button").style.visibility="visible";
    }else{
        alert("Rachel: There is nothing left here to find.")
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



//----   STUDY ROOM   ----
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
function checkDrawer() {
    document.getElementById("drawerButton").style.visibility="hidden";
    document.getElementById("insideGunDrawer").style.visibility="visible";
    document.getElementById("gunImg").style.visibility="visible";
    document.getElementById("drawerButton2").style.visibility="visible";
}
function checkDrawer2() {
    document.getElementById("insideGunDrawer").style.visibility="hidden";
    document.getElementById("gunImg").style.visibility="hidden";
    document.getElementById("drawerButton2").style.visibility="hidden";
}
function takeGun() {
    document.getElementById("gunImg").style.visibility="hidden";
    let gun = readStatus ("gun");
        gun += +1;
        writeStatus("gun", gun);//gun should be equel to 1 at this state.
}

function searchPockets() {
    if (readStatus("ammo") >= 1) {
    alert("Rachel: There is nothing else.");
    } else {
        let ammo0 = confirm("Rachel: I can feel some cold material inside its pocket. Should I take it?");
        if(ammo0 === true) {
            alert("You have found a .45 caliber revolver ammunition.");
            document.getElementById("coatOnPoleHanger").style.visibility="hidden";
            let ammo = readStatus ("ammo");
                ammo += +1;
                writeStatus("ammo", ammo);//ammo should be equel to 1 at this state.
        } else {
            document.getElementById("coatOnPoleHanger").style.visibility="hidden";
            alert("You have left it.");
        }
    }
}
//2) firePlace
function poke() {
    if (readStatus("linear") === "?"){//if poker is found this will be true
        let linear = readStatus ("linear");
                linear += +1;
                writeStatus("linear", linear);
        alert("You have pushed the secret button.");
        document.getElementById("hiddenLadderToUp").style.visibility="visible";
        document.getElementById("bedRoomAnchorButton").style.visibility="visible";
    } else {
        alert("The warm flicker of the flames calm you down.");
    }
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
    } else if (readStatus("ammo") === 0 && readStatus("gun") === 5) {
        for(let i=0; i<=3; i++) {
            document.getElementsByClassName("finalAim")[i].style.visibility="hidden";
        }
        alert("Rachel: I am so sorry it had to be this way. I should have ended your misery.");
        alert("Uncle: It... It's okey my dear Rachel. *Cough* *Cough* It's okey.");
        document.getElementById("toBalcony").style.visibility="visible";
        //old man crying sound effect
        //put empty gun sound effect
    } else if (readStatus("ammo") === 0 && readStatus("gun") === 3) {
        for(let i=0; i<=3; i++) {
            document.getElementsByClassName("finalAim")[i].style.visibility="hidden";
        }
        alert("Rachel: I am so sorry it had to be this way. I should have ended your misery.");
        alert("Uncle: It... It's okey my dear Rachel. *Cough* *Cough* It's okey.");
        alert("Ending2");
        //old man crying sound effect
        //put empty gun sound effect
    } else if (readStatus("ammo") === 0 && (readStatus("gun") === 4 || readStatus("gun") === 2)) {
        for(let i=0; i<=3; i++) {
            document.getElementsByClassName("finalAim")[i].style.visibility="hidden";
        }
        alert("Ending2");
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
//FBoss2
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
    } else if (readStatus("ammo") === 0 && readStatus("gun") === 3) {
        for(let i=0; i<=3; i++) {
            document.getElementsByClassName("finalAim")[i].style.visibility="hidden";
        }
        alert("Rachel: I am so sorry it had to be this way. I should have ended your misery.");
        alert("Uncle: It... It's okey my dear Rachel. *Cough* *Cough* It's okey.");
        //old man crying sound effect
        //put empty gun sound effect
        alert("Ending2");
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





//Gun functions(in order for gun functions to run, gun at least have to be 1 which means gun has to be found.) If gun is not found. Then protogonist shouldn't be able to come to this room. Or use different html with a same setting.
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

//Balcony
function point() {
    let gun = readStatus ("gun");
        gun += +4;
        writeStatus("gun", gun);
        document.getElementById("confront").style.visibility="hidden";
}

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
            let gun = readStatus ("gun");
            gun += -30;//because i don't want this function to run again
            writeStatus("gun", gun);
            alert("Ending3");
            //gunshot sound effect

        } else if (death.key==="k" && readStatus("ammo") >= 1 && readStatus("bone")===2) {
            this.getElementById("billDead").style.visibility="visible";
            this.getElementById("billAlive").style.visibility="hidden";
            for(let i=0; i<=1; i++) {
                document.getElementsByClassName("killAim")[i].style.visibility="hidden";
            }
            let ammo = readStatus ("ammo");
            ammo --;
            writeStatus("ammo", ammo); 
            let gun = readStatus ("gun");
            gun += -30;//because i don't want this function to run again
            writeStatus("gun", gun);
            alert("Ending6 - drJohnTuna");
            //gunshot sound effect
        } else if (death.key==="k" && readStatus("ammo") >= 1 && readStatus("bone") !=2) {
            this.getElementById("billDead").style.visibility="visible";
            this.getElementById("billAlive").style.visibility="hidden";
            for(let i=0; i<=1; i++) {
                document.getElementsByClassName("killAim")[i].style.visibility="hidden";
            }  
            let ammo = readStatus ("ammo");
            ammo --;
            writeStatus("ammo", ammo);
            let gun = readStatus ("gun");
            gun += -30;//because i don't want this function to run again
            writeStatus("gun", gun);
            alert("Ending5");
            //gunshot sound effect
        } else if ((death.key==="k" || death.key==="s") && readStatus("ammo") <= 0) {
            let gun = readStatus ("gun");
            gun += -30;//because i don't want this function to run again
            writeStatus("gun", gun);
            //empty gun sound effect
            alert("Ending4");
        }
    }
});