const form = document.querySelector("form");
const formIntro = document.querySelector(".form-intro");
const templeLocation = document.querySelector("#temple-location");
const revealForm1Btn = document.querySelector(".reveal-form-1-btn");
const revealForm2Btn = document.querySelector(".reveal-form-2-btn");
const formPart1 = document.querySelector(".form-part-1");
const formPart2 = document.querySelector(".form-part-2");
const formSubmitBtn = document.querySelector(".submit-btn");


const revealForm1 = function(){
    if(templeLocation.value){
    formIntro.classList.add("hidden-all");
    formPart1.classList.remove("hidden-all");
    }else{
        templeLocation.focus();
        alert("We can't make a reservation if we don't know where you'd like to go.");
    };
};

const revealForm2  = function(){
    formPart2.classList.remove("hidden-all");
    revealForm2Btn.classList.add("hidden-all");
    formSubmitBtn.classList.remove("hidden-all")
}
revealForm1Btn.addEventListener("click", revealForm1);
revealForm2Btn.addEventListener("click", revealForm2);