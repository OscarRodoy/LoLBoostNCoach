// Current Rank
var currentRankArray = ["Iron", "Bronze", "Silver", "Gold", "Platinum", "Diamond"];
var currentRankIMG = document.getElementById("currentRankIMG");
var startRank = document.getElementById("startRank");
var currentRankText = document.getElementById("currentRankText");
var currentRank = "Bronze";
var currentDiv = 1;
function prevCurrent(elm){
  var x = currentRankArray.indexOf(currentRank);
  if (x == 0) { return; };
  currentRank = currentRankArray[x-1];
  currentRankIMG.style.backgroundImage = `url("Ranks/${currentRank.toLowerCase() + currentDiv.toString()}.png")`;
  startRank.style.backgroundImage = `url("Ranks/${currentRank.toLowerCase() + currentDiv.toString()}.png")`;
  currentRankText.innerHTML = `${currentRank}`;
  updatePrice();
};
function nextCurrent(elm){
  var x = currentRankArray.indexOf(currentRank);
  if (x == currentRankArray.length-1) { return; };
  currentRank = currentRankArray[x+1];
  currentRankIMG.style.backgroundImage = `url("Ranks/${currentRank.toLowerCase() + currentDiv.toString()}.png")`;
  startRank.style.backgroundImage = `url("Ranks/${currentRank.toLowerCase() + currentDiv.toString()}.png")`;
  currentRankText.innerHTML = `${currentRank}`;
  updatePrice();
};
function changeCurrentDiv(elm, num){
  if (num == currentDiv) {return; };
  for (var i = 1; i <= 7; i+=2){
    elm.parentNode.childNodes[i].classList.remove("selected");
  };
  elm.classList.add("selected");
  currentDiv = num;
  currentRankIMG.style.backgroundImage = `url("Ranks/${currentRank.toLowerCase() + currentDiv.toString()}.png")`;
  startRank.style.backgroundImage = `url("Ranks/${currentRank.toLowerCase() + currentDiv.toString()}.png")`;
  updatePrice();
};

// Desired Rank
var desiredRankArray = ["Iron", "Bronze", "Silver", "Gold", "Platinum", "Diamond", "Master"];
var desiredRankIMG = document.getElementById("desiredRankIMG");
var endRank = document.getElementById("endRank");
var desiredRankText = document.getElementById("desiredRankText");
var desiredRank = "Gold";
var desiredDiv = 4;
var divDesiredDiv = document.getElementById("desiredDiv");
var divDesiredLP = document.getElementById("desiredLP");
var inpDesiredLP = document.getElementById("inpDesiredLP");
var maxLP = 500;
var minLP = 30;
function prevDesired(elm){
  var x = desiredRankArray.indexOf(desiredRank);
  if (x == 0) { return; };
  desiredRank = desiredRankArray[x-1];
  if (desiredRank == "Diamond"){
    divDesiredDiv.style.display = "flex";
    divDesiredLP.style.display = "none";
    desiredDiv = 4;
    for (var i = 1; i <= 7; i+=2){
      document.getElementById("div4_d").parentNode.childNodes[i].classList.remove("selected");
    };
    document.getElementById("div4_d").classList.add("selected");
  };
  desiredRankIMG.style.backgroundImage = `url("Ranks/${desiredRank.toLowerCase() + desiredDiv.toString()}.png")`;
  endRank.style.backgroundImage = `url("Ranks/${desiredRank.toLowerCase() + desiredDiv.toString()}.png")`;
  desiredRankText.innerHTML = `${desiredRank}`;
  updatePrice();
};
function nextDesired(elm){
  var x = desiredRankArray.indexOf(desiredRank);
  if (x == desiredRankArray.length-1) { return; };
  desiredRank = desiredRankArray[x+1];
  if (desiredRank == "Master"){
    divDesiredDiv.style.display = "none";
    divDesiredLP.style.display = "flex";
    desiredDiv = 4;
    inpDesiredLP.value = 30;
    desiredRankIMG.style.backgroundImage = `url("Ranks/${desiredRank.toLowerCase() + '4'}.png")`;
    endRank.style.backgroundImage = `url("Ranks/${desiredRank.toLowerCase() + '4'}.png")`;
  } else {
    desiredRankIMG.style.backgroundImage = `url("Ranks/${desiredRank.toLowerCase() + desiredDiv.toString()}.png")`;
    endRank.style.backgroundImage = `url("Ranks/${desiredRank.toLowerCase() + desiredDiv.toString()}.png")`;
  };
  desiredRankText.innerHTML = `${desiredRank}`;
  updatePrice();
};
function changeDesiredDiv(elm, num){
  if (num == desiredDiv) {return; };
  for (var i = 1; i <= 7; i+=2){
    elm.parentNode.childNodes[i].classList.remove("selected");
  };
  elm.classList.add("selected");
  desiredDiv = num;
  desiredRankIMG.style.backgroundImage = `url("Ranks/${desiredRank.toLowerCase() + desiredDiv.toString()}.png")`;
  endRank.style.backgroundImage = `url("Ranks/${desiredRank.toLowerCase() + desiredDiv.toString()}.png")`;
  updatePrice();
};
function changeDesiredLP(elm){
  if (elm.value < minLP) {elm.value = minLP; };
  if (elm.value > maxLP) {elm.value = maxLP; };
  // change desiredDiv according to images
  updatePrice();
};

// select options
selectServer = document.getElementById("selectServer");
server = selectServer.value;
selectQueue = document.getElementById("selectQueue");
queue = selectQueue.value;
selectSpellOrder = document.getElementById("selectSpellOrder");
spellOrder = selectSpellOrder.value;
selectLPcurrent = document.getElementById("selectLPcurrent");
lpCurrent = selectLPcurrent.selectedIndex;
selectLPgain = document.getElementById("selectLPgain");
selectLPgain.selectedIndex = 2;
lpGain = selectLPgain.selectedIndex;
function changeServer(){
  server = selectServer.value;
};
function changeQueue(){
  queue = selectQueue.value;
};
function changeSpellOrder(){
  spellOrder = selectSpellOrder.value;
};
function changeLPcurrent(){
  lpCurrent = selectLPcurrent.selectedIndex;
  updatePrice();
};
function changeLPgain(){
  lpGain = selectLPgain.selectedIndex;
  updatePrice();
};

// champs prefrences
var champList = ["Aatrox", "Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie", "Aphelios", "Ashe", "Aurelion Sol", "Azir", "Bard", "Blitzcrank", "Brand", "Braum", "Caitlyn", "Camille", "Cassiopeia", "Cho'Gath", "Corki", "Darius", "Diana", "Dr. Mundo", "Draven", "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Hecarim", "Heimerdinger", "Illaoi", "Irelia", "Ivern", "Janna", "Jarvan IV", "Jax", "Jayce", "Jhin", "Jinx", "Kai'Sa", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "Kha'Zix", "Kindred", "Kled", "Kog'Maw", "LeBlanc", "Lee Sin", "Leona", "Lillia", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "Master Yi", "Miss Fortune", "Mordekaiser", "Morgana", "Nami", "Nasus", "Nautilus", "Neeko", "Nidalee", "Nocturne", "Nunu and Willump", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke", "Qiyana", "Quinn", "Rakan", "Rammus", "Rek'Sai", "Rell", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Samira", "Sejuani", "Senna", "Seraphine", "Sett", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", "Sylas", "Syndra", "Tahm Kench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Vel'Koz", "Vi", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xayah", "Xerath", "Xin", "Zhao", "Yasuo", "Yone", "Yorick", "Yuumi", "Zac", "Zed", "Ziggs", "Zilean", "Zoe", "Zyra"];
var selectChamp1 = document.getElementById("selectChamp1");
var selectChamp2 = document.getElementById("selectChamp2");
for (var i = 0; i < champList.length; i++){
  selectChamp1.innerHTML += `<option>${champList[i]}</option>`;
  selectChamp2.innerHTML += `<option>${champList[i]}</option>`;
};
var champ1 = champList[0];
var champ2 = champList[1];
selectChamp2.selectedIndex = 1;
function changeChamp1(){
  previous = champ1;
  champ1 = selectChamp1.value;
  if (champ1 == champ2){
    selectChamp1.selectedIndex = champList.indexOf(previous);
    champ1 = previous;
  };
};
function changeChamp2(){
  previous = champ2;
  champ2 = selectChamp2.value;
  if (champ2 == champ1){
    selectChamp2.selectedIndex = champList.indexOf(previous);
    champ2 = previous;
  };
};
var pos1 = "top";
var pos2 = "fill";
function changePos1(elm, pos){
  if (pos == pos2) {return; };
  for (var i = 1; i <= 11; i+=2){
    elm.parentNode.childNodes[i].classList.remove("selected");
  };
  elm.classList.add("selected");
  pos1 = pos;
};
function changePos2(elm, pos){
  if (pos == pos1) {return; };
  for (var i = 1; i <= 11; i+=2){
    elm.parentNode.childNodes[i].classList.remove("selected");
  };
  elm.classList.add("selected");
  pos2 = pos;
};
// prefrences on / off
var spellOrderDiv = document.getElementById("spellOrder");
var spellPref = false;
function spellPrefOn(){
  spellPref = !spellPref;
  if (spellPref){
    spellOrderDiv.classList.remove("notActivated");
    // spellOrderDiv.scrollIntoView(false);
    spellOrderDiv.scrollIntoView({
      behavior: 'auto',
      block: 'center',
      inline: 'center'
    });
  } else {
    spellOrderDiv.classList.add("notActivated");
  };
};
var toggleSpellDiv = document.getElementById("toggleSpellDiv");
toggleSpellDiv.style.transition = "0.2s";
function notifySpell(){
  if (spellOrderDiv.classList.contains("notActivated")){
    toggleSpellDiv.style.marginLeft = "25px";
    setTimeout(function(){
      toggleSpellDiv.style.marginLeft = "15px";
      setTimeout(function(){
        toggleSpellDiv.style.marginLeft = "20px";
      }, 190);
    }, 190);
  };
};
var champGrid = document.getElementById("champGrid");
var champPref = false;
function champPrefOn(){
  champPref = !champPref;
  if (champPref){
    champGrid.classList.remove("notActivated");
    champGrid.scrollIntoView(false);
  } else {
    champGrid.classList.add("notActivated");
  };
};
var toggleChampDiv = document.getElementById("toggleChampDiv");
toggleChampDiv.style.transition = "0.2s";
function notifyChamp(){
  if (champGrid.classList.contains("notActivated")){
    toggleChampDiv.style.marginLeft = "25px";
    setTimeout(function(){
      toggleChampDiv.style.marginLeft = "15px";
      setTimeout(function(){
        toggleChampDiv.style.marginLeft = "20px";
      }, 190);
    }, 190);
  };
};
// checkout
var percentageList = [1.05, 1.10, 1.15, 1.20, 1.05, 1.05];
var toggleList = [false, false, false, false, false, false];
function toggleSwitch(elm, num) {
  toggleList[num] = !toggleList[num];
  if (toggleList[num]) {
    elm.childNodes[1].classList.add("switchOn");
    elm.childNodes[1].classList.remove("switchOff");
    elm.childNodes[3].style.opacity = 1;
    elm.childNodes[5].style.opacity = 0;
    elm.style.background = "var(--blue)";
  } else {
    elm.childNodes[1].classList.remove("switchOn");
    elm.childNodes[1].classList.add("switchOff");
    elm.childNodes[3].style.opacity = 0;
    elm.childNodes[5].style.opacity = 1;
    elm.style.background = "grey";
  };
  updatePrice();
};
var lpGainList = [1.40, 1.10, 1, 0.95, 0.90, 0.80];
var divList = [4, 3, 2, 1];
var priceList = [3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 10, 11.5, 13, 14.5, 16, 17.5, 20, 35, 60, 100, 150];
var estimatedTime = document.getElementById("estimatedTime");
var priceText = document.getElementById("priceText");
var btnPurchase = document.getElementById("btnPurchase");
function updatePrice(){
  var price = 0;
  var startNum = divList[currentDiv-1] + (currentRankArray.indexOf(currentRank) * 4);
  var endNum = divList[desiredDiv-1] + (desiredRankArray.indexOf(desiredRank) * 4);
  if (startNum >= endNum) {
    priceText.innerHTML = "Invalid";
    btnPurchase.style.cursor = "not-allowed";
    estimatedTime.innerHTML = `Estimated Completion Time: <span>0 Days</span>`;
    return;
  };
  btnPurchase.style.cursor = "pointer";
  for (var i = startNum-1; i < endNum-1; i++){
    price += priceList[i];
  };
  price -= priceList[startNum-1] * (lpCurrent / 5);
  price *= lpGainList[lpGain];
  for (var i = 0; i < percentageList.length; i++){
    if (toggleList[i]){
      price *= percentageList[i];
    };
  };
  priceText.innerHTML = `${price.toFixed(2)}€`;
  var time = endNum - startNum;
  estimatedTime.innerHTML = `Estimated Completion Time: <span>${time} Days</span>`;
}; updatePrice();

/* variables:
currentRank
currentDiv
desiredRank
desiredDiv
inpDesiredLP.value
toggleList
server
queue
spellOrder
lpCurrent
lpGain
pos1
pos2
champ1
champ2
*/
