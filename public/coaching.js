function getDatetime(){
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;
  return dateTime;
};

// var divCoaches = document.getElementById("divCoaches");
// var arrayCoaches = [
//   {name: "Alexcrew", discord: ""},
//   {name: "x", discord: ""},
//   {name: "x", discord: ""},
//   {name: "x", discord: ""},
// ];
// for (var i = 0; i < arrayCoaches.length; i++){
//   divCoaches.innerHTML += `
//     <div>
//       <p>${arrayCoaches[i].name}</p>
//       <img src="Images/profileIMG.jpg">
//       <div id="btnDiscord"><a href="${arrayCoaches[i].discord}">Message on Discord</a></div>
//     </div>
//   `;
// };

var gamesAmount = document.getElementById("gamesAmount");
var prize = document.getElementById("prize");
var myGames = 2;
var maxGames = 10;
prize.innerHTML = `Your total: <i>${((myGames*15)/0.75).toFixed(2)}€</i> <span>${(myGames*15).toFixed(2)}€</span>`;
function prevGames(){
  if (myGames - 1 <= 0){return;};
  myGames -= 1;
  gamesAmount.innerHTML = `${myGames}`;
  prize.innerHTML = `Your total: <i>${((myGames*15)/0.75).toFixed(2)}€</i> <span>${(myGames*15).toFixed(2)}€</span>`;
};
function nextGames(){
  if (myGames + 1 > maxGames){return;};
  myGames += 1;
  gamesAmount.innerHTML = `${myGames}`;
  prize.innerHTML = `Your total: <i>${((myGames*15)/0.75).toFixed(2)}€</i> <span>${(myGames*15).toFixed(2)}€</span>`;
};
var selectCoaching = document.getElementById("selectCoaching");
var coachingType = selectCoaching.value;
function changeCoachingType(){
  coachingType = selectCoaching.value;
};
var selectServer = document.getElementById("selectServer");
var myServer = selectServer.value;
function changeServer(){
  myServer = selectServer.value;
};
var myPos = "fill";
function changePos(elm, pos){
  if (pos == myPos) {return; };
  for (var i = 1; i <= 11; i+=2){
    elm.parentNode.childNodes[i].classList.remove("selected");
  };
  elm.classList.add("selected");
  myPos = pos;
};
var champList = ["Aatrox", "Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie", "Aphelios", "Ashe", "Aurelion Sol", "Azir", "Bard", "Blitzcrank", "Brand", "Braum", "Caitlyn", "Camille", "Cassiopeia", "Cho'Gath", "Corki", "Darius", "Diana", "Dr. Mundo", "Draven", "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Hecarim", "Heimerdinger", "Illaoi", "Irelia", "Ivern", "Janna", "Jarvan IV", "Jax", "Jayce", "Jhin", "Jinx", "Kai'Sa", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "Kha'Zix", "Kindred", "Kled", "Kog'Maw", "LeBlanc", "Lee Sin", "Leona", "Lillia", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "Master Yi", "Miss Fortune", "Mordekaiser", "Morgana", "Nami", "Nasus", "Nautilus", "Neeko", "Nidalee", "Nocturne", "Nunu and Willump", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke", "Qiyana", "Quinn", "Rakan", "Rammus", "Rek'Sai", "Rell", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Samira", "Sejuani", "Senna", "Seraphine", "Sett", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", "Sylas", "Syndra", "Tahm Kench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Vel'Koz", "Vi", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xayah", "Xerath", "Xin", "Zhao", "Yasuo", "Yone", "Yorick", "Yuumi", "Zac", "Zed", "Ziggs", "Zilean", "Zoe", "Zyra"];
var selectChamp = document.getElementById("selectChamp");
for (var i = 0; i < champList.length; i++){
  selectChamp.innerHTML += `<option>${champList[i]}</option>`;
};
var myChamp = champList[0];
function changeChamp(){
  myChamp = selectChamp.value;
};
var rankList = ["Iron IV", "Iron III", "Iron II", "Iron I", "Bronze IV", "Bronze III", "Bronze II", "Bronze I", "Silver IV", "Silver III", "Silver II", "Silver I", "Gold IV", "Gold III", "Gold II", "Gold I", "Platinum IV", "Platinum III", "Platinum II", "Platinum I", "Diamond IV", "Diamond III", "Diamond II", "Diamond I", "Master", "Grandmaster", "Challenger"];
var selectRank = document.getElementById("selectRank");
for (var i = 0; i < rankList.length; i++){
  selectRank.innerHTML += `<option>${rankList[i]}</option>`;
};
var myRank = rankList[8];
selectRank.selectedIndex = 8;
function changeRank(){
  myRank = selectRank.value;
};

function generateValue(){
  if (inpDiscord.value == "") {
    inpDiscord.style.border = "2px solid red";
    alert("You must fill in the required information in order to make a payment!");
    return;
  };
  inpDiscord.style.border = "2px solid white";
  var zzz = myGames * 15;
  return zzz.toFixed(2)
};
