


(function (){
    for (const link of document.querySelectorAll('#navbarText>ul>li>a')) {
        link.addEventListener('click',setActiveState);
    }
})()

function setActiveState(){
    for (const link of document.querySelectorAll('#navbarText>ul>li>a')) {
        //link.parentElement.classList = "nav-item";
        link.parentElement.classList.remove("active");
    }

    //this.parentElement.classList = "nav-item active";
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




  // var secAbout = document.getElementById("Aboutme1");
  // secAbout.addEventListener("click",function(){
  //   const elment=document.querySelector('#Aboutme');
  //   elment.classList.add('animate__animated', 'animate__fadeInDown');
  //   animateCSS('#Aboutme', 'fadeInDown');
  // });

  // var secAbout = document.getElementById("HOME1");
  // secAbout.addEventListener("click",function(){
  //   const elment=document.querySelector('#HOME');
  //   elment.classList.add('animate__animated', 'animate__fadeInDown');
  //   animateCSS('#Aboutme', 'fadeInDown');
  // });

  // var secAbout = document.getElementById("Service1");
  // secAbout.addEventListener("click",function(){
  //   const elment=document.querySelector('#Service1');
  //   elment.classList.add('animate__animated', 'animate__fadeInDown');
  //   animateCSS('#Aboutme', 'fadeInDown');
  // });


  // var secAbout = document.getElementById("Aboutme1");
  // secAbout.addEventListener("click",function(){
  //   const elment=document.querySelector('#Aboutme');
  //   elment.classList.add('animate__animated', 'animate__fadeInDown');
  //   animateCSS('#Aboutme', 'fadeInDown');
  // });

  // var secAbout = document.getElementById("Aboutme1");
  // secAbout.addEventListener("click",function(){
  //   const elment=document.querySelector('#Aboutme');
  //   elment.classList.add('animate__animated', 'animate__fadeInDown');
  //   animateCSS('#Aboutme', 'fadeInDown');
  // });