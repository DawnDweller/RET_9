function riverWatch() {
    document.getElementById("riverWatch").style.visibility="visible";
    document.getElementById("riverWatchButton").style.visibility="hidden";
    document.getElementById("backToBridgeButton").style.visibility="visible";
    document.getElementById("halfNecklace").style.visibility="visible";
    document.getElementById("churchYardAnchor").style.visibility="hidden";
}
function backToBridge() {
    document.getElementById("riverWatch").style.visibility="hidden";
    document.getElementById("riverWatchButton").style.visibility="visible";
    document.getElementById("backToBridgeButton").style.visibility="hidden";
    document.getElementById("churchYardAnchor").style.visibility="visible";
}