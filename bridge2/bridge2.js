  let tracker;
function riverWatch() {
  
  if (tracker === undefined) {
    document.getElementById("riverWatch").style.visibility="visible";
    document.getElementById("riverWatchButton").style.visibility="hidden";
    document.getElementById("backToBridgeButton").style.visibility="visible";
    document.getElementById("halfNecklace").style.visibility="visible";
    tracker = 1;
    } else {
    document.getElementById("riverWatch").style.visibility="visible";
    document.getElementById("riverWatchButton").style.visibility="hidden";
    document.getElementById("backToBridgeButton").style.visibility="visible";
    document.getElementById("halfNecklace").style.visibility="hidden";
    }
}
function backToBridge() {
    document.getElementById("riverWatch").style.visibility="hidden";
    document.getElementById("riverWatchButton").style.visibility="visible";
    document.getElementById("backToBridgeButton").style.visibility="hidden";
}