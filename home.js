
/////////////////////////////// ADDING CLASSES ON CHOSEN OPTION ///////////////////////////////

(function (){
    for (const link of document.querySelectorAll('#navbarText>ul>li>a')) {
        link.addEventListener('click',setActiveState);
    }
})()

function setActiveState(){
    for (const link of document.querySelectorAll('#navbarText>ul>li>a')) {
       
        link.parentElement.classList.remove("active");
    }

   
    this.parentElement.classList.add("active");
}


let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("main section");

let lastId;
let cur = [];

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.parentElement.classList.add("active");
    } else {
      link.parentElement.classList.remove("active");
    }
  });
});

/////////////////////////////// ADDING CLASSES ON CHOSEN OPTION ///////////////////////////////


   
////////////////////////////// MENU COLLAPSE ON CLICK (BOOTSTRAP) //////////////////////////////
    $(function(){ 
     var navMain = $(".navbar-collapse"); 
     navMain.on("click", "a:not([data-toggle])", null, function () {
         navMain.collapse('hide');
     });
 });
////////////////////////////// MENU COLLAPSE ON CLICK (BOOTSTRAP) //////////////////////////////