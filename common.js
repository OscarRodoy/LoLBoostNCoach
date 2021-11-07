var navBtns = document.getElementsByClassName("navBtns");

function select(elm){
  for (var i = 0; i < navBtns.length; i++){
    navBtns[i].classList.remove("active");
  };
  if (elm.id == "logo"){
    elm.parentNode.childNodes[3].childNodes[1].classList.add("active");
  } else if (elm.classList.contains("dontActivate")) {
    elm.parentNode.childNodes[1].classList.add("active");
  } else {
    elm.classList.add("active");
  };
};

function home(){
  window.location.href = "home.html";
};
function about(){
  window.location.href = "home.html#promises";
};
function reviews(){
  window.location.href = "home.html#reviews";
};
function boosting(){
  window.location.href = "boosting.html";
};
function coaching(){

};
