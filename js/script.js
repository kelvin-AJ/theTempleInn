const navBtn = document.querySelector(".nav-btn");
const overlay = document.querySelector(".overlay");
const navEl = document.querySelector(".nav");
const headerText = document.querySelector(".header-text");
const headerP = document.querySelector(".header-p");
const ctaBtn = document.querySelector(".cta-btn");
const headerTemples = document.querySelectorAll(".header-img");
const footerEl = document.querySelector(".footer-info");


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
}, 10000);

// DATE AND LAST MODIFIED

const curDate = new Date();
let curYear = curDate.getFullYear();

const lastModifiedDate = new Date(document.lastModified)

let modYear = lastModifiedDate.getFullYear();
let modDay = lastModifiedDate.getDay();
let modMonth = lastModifiedDate.getMonth();
let modminute = lastModifiedDate.getMinutes();
let modsecond = lastModifiedDate.getSeconds()
let modhour = lastModifiedDate.getHours(); 

footerEl.innerHTML = `©${curYear} The Temple Inn & Suite | Last Modified: ${modMonth}/${modDay}/${modYear} ${modhour}:${modminute}:${modsecond}`;
