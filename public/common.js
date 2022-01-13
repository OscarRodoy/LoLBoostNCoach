divPromises = document.getElementById("promises");
divReviews = document.getElementById("reviews");
divFaq = document.getElementById("divFaq");
function home(){
  window.location.href = "index.html";
};
function about(){
  window.location.href = "index.html#promises";
  divPromises.scrollIntoView({
    behavior: 'auto',
    block: 'center',
    inline: 'center'
  });
};
function reviews(){
  window.location.href = "index.html#reviews";
  divReviews.scrollIntoView({
    behavior: 'auto',
    block: 'center',
    inline: 'center'
  });
};
function faq(){
  window.location.href = "index.html#divFaq";
  divFaq.scrollIntoView({
    behavior: 'auto',
    block: 'center',
    inline: 'center'
  });
};
function boosting(){
  window.location.href = "boosting.html";
};
function coaching(){
  window.location.href = "coaching.html";
};
function openQuestion(elm){
  let len = (elm.parentNode.parentNode.childNodes.length - 3) / 2;
  let data = elm.getAttribute('data-before');
  for (var i = 0, x = 3; i < len; i++, x+=2){
    elm.parentNode.parentNode.childNodes[x].childNodes[3].classList.remove('visible');
    elm.parentNode.parentNode.childNodes[x].childNodes[1].setAttribute('data-before', '+');
  };
  if (data == '-') { return; };
  elm.parentNode.childNodes[3].classList.add('visible');
  elm.setAttribute('data-before', '-');
};
function openNav(elm, close=false){
  // if (elm.childNodes[3].style.display != "block" && close == false){
  //   elm.childNodes[3].style.display = "block";
  // } else {
  //   elm.childNodes[3].style.display = "none";
  // };
};
// document.addEventListener('scroll', function(e){
//   openNav(document.getElementById("dropDownMenu"), true);
// });
