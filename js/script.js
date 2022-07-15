const navBtn = document.querySelector(".nav-btn");
const overlay = document.querySelector(".overlay");
const navEl = document.querySelector(".nav");
const headerText = document.querySelector(".header-text");
const headerP = document.querySelector(".header-p");
const ctaBtn = document.querySelector(".cta-btn");
const headerTemples = document.querySelectorAll(".header-img");


// Navigation toggle
const toggleHide = function(element){
    element.classList.toggle("hide");
}

const switchNav = function(){
    navBtn.classList.toggle("show-nav");
    if (overlay.hasAttribute("id")){
        overlay.removeAttribute("id")
    }else{
        overlay.setAttribute("id", "nav-overlay");
    }
   
    toggleHide(navEl);
    toggleHide(headerText);
    toggleHide(headerP);
    toggleHide(ctaBtn);
}

navBtn.addEventListener("click", switchNav);

 setInterval(() => {
    headerTemples.forEach(img => {
        img.classList.toggle("transparent");
        img.classList.toggle("opaque");
    });
}, 10000)