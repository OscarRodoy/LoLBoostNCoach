
var transitionSpeed = 300;  // set time it takes to scroll in ms
var divCount = 12;          // set amount of divs in carousell (must have atleast 1 div on left and right of visible divs)
var visibleDivs = 3;        // set amount of visible divs on the screen

// configures code to fit divCount and visibleDivs
var divContent = document.getElementsByClassName("divContent");
function createCarousellGrid(){
  for (var i = 0; i < divContent.length; i++){
    divContent[i].style.gridTemplateColumns = "repeat(" + divCount + ", 1fr)";
    divContent[i].style.width = "calc(" + (divCount * (100/visibleDivs)) + "% + " + (divCount * (10/visibleDivs)) + "px)";
  };
}; createCarousellGrid()
var translateDist = -100 / divCount;

// update visibleDivs on page resize
var screenWidth = window.innerWidth;
document.querySelector("body").onresize = function(){
  calcVisibleDivs();
};
function calcVisibleDivs(){
  var screenWidth = window.innerWidth;
  if (screenWidth >= 1000) {
    visibleDivs = 3;
  } else if (screenWidth >= 700) {
    visibleDivs = 2;
  } else {
    visibleDivs = 1;
  };
  createCarousellGrid();
};
calcVisibleDivs();

// variables
var divContent_1 = document.getElementById("divContent_1");
var btnNext_R1_Rdy = btnNext_L1_Rdy = true;

// hide amination when opening page
divContent_1.style.transition = 'none';
divContent_1.style.transform = "translate(" + translateDist + "%)";
setTimeout(() => {
  divContent_1.style.transition = transitionSpeed + "ms";
}, 40);

// scroll function
function next(side, num) {
  var ready = "btnNext_" + side + num + "_Rdy";
  if (window[ready] == false) { return; };
  window[ready] = false;
  var divCont = window["divContent_" + num];
  if (side == "R") { divCont.style.transform = "translate(" + (translateDist*2) + "%)"; }
  else { divCont.style.transform = 'translate(0%)'; };
  setTimeout(() => {
    if (side == "R") { divCont.appendChild(divCont.firstElementChild); }
    else { divCont.prepend(divCont.lastElementChild); };
    divCont.style.transition = 'none';
    divCont.style.transform = "translate(" + translateDist + "%)";
    setTimeout(() => {
      divCont.style.transition = transitionSpeed + "ms";
      window[ready] = true;
    }, 40);
  }, transitionSpeed);
};

// content
var content = [
  {name: "Anonymous #1793", startRank: "platinum4", endRank: "diamond3", message: "<q>Very efficent booster. Thought it would take much longer but this guy was a beast.</q>"},
  {name: "Anonymous #932", startRank: "gold2", endRank: "platinum2", message: "<q>Super helpfull and easy to talk booster. Had a blast playing and got to where I wanted a lot quicker than he promised. Thanks!</q>"},
  {name: "Anonymous #1143", startRank: "bronze3", endRank: "silver4", message: "<q>100% will come back here when I need help again, best booster ever!</q>"},
  {name: "Anonymous #289", startRank: "silver3", endRank: "gold4", message: "<q>Been hardstuck all season, figured I'd give a service like this a go. Never been more happy with something I bought online, thanks a lot!</q>"},
  {name: "Anonymous #756", startRank: "bronze4", endRank: "platinum4", message: "<q>Quick and easy. No bullshit, just straight into action. Love you guys!</q>"},
  {name: "Anonymous #1603", startRank: "silver2", endRank: "gold4", message: "<q>There was no way I were gonna end this season in silver again. Thanks for the help.</q>"},
  {name: "Anonymous #1271", startRank: "platinum2", endRank: "master4", message: "<q>Very nice</q>"},
  {name: "Anonymous #1089", startRank: "silver1", endRank: "gold4", message: "<q>Third time now, satisfied every damn time! </q>"},
  {name: "Anonymous #658", startRank: "diamond4", endRank: "diamond1", message: "<q>I think I am in love with my booster ;)</q>"},
  {name: "Anonymous #517", startRank: "iron3", endRank: "silver4", message: "<q>Super helpfull, dont think ive play such ez games before</q>"},
  {name: "Anonymous #1820", startRank: "gold3", endRank: "platinum4", message: "<q>Ezzzzzz, thank you, now my buddies will woreship me again</q>"},
  {name: "Anonymous #434", startRank: "silver2", endRank: "platinum1", message: "<q>thanks boyz!</q>"},
];
/*for (var i = 1; i <= 100; i++){
  content.push( {name: "Anonymous #2194", img: "Images/profileIMG.jpg", startRank: "Ranks/silver2.png", endRank: "Ranks/gold1.png", message: "<q>Super helpfull and easy to talk people. Had a blast playing and got to where I wanted alot quicker than I imagined. Thanks!</q>"});
};*/

// load content
function load_divContent_1(){
  divContent_1.innerHTML = "";
  for (var i = -1; i < divCount-1; i++){ // -1 becuase index start at 0
    var j = i;
    if (j == -1) {j = divCount-1}; // the last item must be loaded first
    divContent_1.innerHTML += `
      <div>
        <p id="name">${content[j].name}</p>
        <div id="divRank">
          <img class="rank" src="Ranks/${content[j].startRank}.png">
          <img id="arrow" src="Images/iconArrow.png">
          <img class="rank" src="Ranks/${content[j].endRank}.png">
        </div>
        <p id="message">${content[j].message}</p>
        <div id="divStars">
          <img src="Images/iconStars.png">
        </div>
      </div>
    `;
  };
};
load_divContent_1();
