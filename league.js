var navBtns = document.getElementsByClassName("navBtns");

function select(elm){
  for (var i = 0; i < navBtns.length; i++){
    navBtns[i].classList.remove("active");
  };
  elm.classList.add("active");
};
