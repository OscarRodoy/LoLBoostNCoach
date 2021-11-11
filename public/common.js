divPromises = document.getElementById("promises");
divReviews = document.getElementById("reviews");
function home(){
  window.location.href = "home.html";
};
function about(){
  window.location.href = "home.html#promises";
  divPromises.scrollIntoView({
    behavior: 'auto',
    block: 'center',
    inline: 'center'
  });
};
function reviews(){
  window.location.href = "home.html#reviews";
  divReviews.scrollIntoView({
    behavior: 'auto',
    block: 'center',
    inline: 'center'
  });
};
function boosting(){
  window.location.href = "boosting.html";
};
function coaching(){

};
