const url = "https://kelvin-aj.github.io/theTempleInn/json/temples.json";
const pageHeader = document.querySelector(".page-header");
const pageOverlay = document.querySelector(".temples-overlay");
const templesGrid = document.querySelector(".temples-grid");
const templesLarge = document.querySelector(".temples-expanded");
let templesArr = [];

// LIKE TEMPLE
const likeTemple = function(id){
    const imgStatus = localStorage.getItem(`${id}`);
    if(imgStatus == "not-liked") localStorage.setItem(`${id}`, "liked");
    else localStorage.setItem(`${id}`, "not-liked");
    displayTemples(templesArr);
}

// DISPLAY LARGE CARD
const displayLarge = function(id){
    const temple = templesArr[id - 1];
    const status = localStorage.getItem(`${temple.id}`);
    templesLarge.innerHTML ="";
    templesLarge.innerHTML =
    `
    <div class="temple-temple-card temple-large-card">
    <h2>${temple.name}</h2><button onclick="closeLarge()" class="close-temple-btn"><span>&#10005;</span></button>
    <img class="temple-card-img" src="${temple.img}" alt="${temple.name}">
    <div class="temple-long-info">
        <span>${temple.address}</span>
        <span>${temple.telephone}</span>
        <span><h3>Services:</h3><p>${temple.services}</p></span>
        <span><h3>History:</h3><p>${temple.history}</p></span>
        <span><h3>Ordinances:</h3><p>${temple.ordinances}</p></span>
        <span><h3>Schedule:</h3>
        <ul>
            <li>${temple.schedule1}</li>
            <li>${temple.schedule2}</li>
        </ul>
        </span>
    </div>
    <div class="temple-card-action-grid">
    <img src="images/${status}-icon.png" alt="like button">
    </div>
</div>
    `;
    pageOverlay.classList.remove("hidden-all");
};
// CLOSE LARGE CARD
const closeLarge = function(){
    templesLarge.innerHTML ="";
    pageOverlay.classList.add("hidden-all");
}



const displayTemples = function(temples){
    if(localStorage.getItem("visited") != "true"){
    temples.forEach(temple => {
            localStorage.setItem(`${temple.id}`, "not-liked")
    });
    };

    templesGrid.innerHTML = "";
    temples.forEach(temple => {
        const status = localStorage.getItem(`${temple.id}`);

        //DISPLAY TEMPLE CARD
        templesGrid.insertAdjacentHTML("beforeend", 
        `<div class="temple-temple-card"  ondblclick="likeTemple(${temple.id})">
        <h2>${temple.name}</h2>
        <img src="${temple.img}" alt="pictur of ${temple.name}" loading="lazy">
        <div class="temple-short-info">
            <span>${temple.address}</span>
            <span${temple.telephone}</span>
            <span><a href="https://www.churchofjesuschrist.org/temples/list?lang=eng" target="blank_">${temple.email}</a></span>
            <span onclick="displayLarge(${temple.id})"><b>more...</b></span>
        </div>
        <div class="temple-card-action-grid" onclick="likeTemple(${temple.id})">
            <img src="images/${status}-icon.png" alt="like button">
        </div>
    </div>
        `)
    });
}


async function getTemples(){
    const templesFetch = await fetch(url);
    const json = await templesFetch.json();
    console.log(json.temples[1]);
    templesArr = json.temples;
    displayTemples(json.temples);
    localStorage.setItem("visited", "true");
}
getTemples()

