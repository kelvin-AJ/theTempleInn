const spotlightSub = document.querySelector(".spotlight-sub");
const receptionArea = document.querySelector("#services-reception");
const suiteArea = document.querySelector("#services-ft-missionary");
const scrollSuiteBtn = document.querySelector("#scroll-suite-btn");
const scrollWeddingBtn = document.querySelector("#scroll-wedding-btn");
const multiSections = document.querySelectorAll(".multilayer-type");
let spotlightCards;


const services =[
    {
        serviceName : "Free Breakfast",
        description : "Wake up to the most nicely made breakfast to get you started on your day. Best of all, it's free.",
        image :  "images/breakfast-small.jpg"
    },
    {
        serviceName : "Family History Center",
        description : "With free to use family search facilities, you can enjoy doing geneology work while you're not performing ordinances in the temple.",
        image :  "images/family-history-small.jpg"
    },
    {
        serviceName : "Exercise / Workout Room",
        description : "Get those muscles moving with access to a well equiped gym",
        image :"images/gym-small.jpg"
    },
    {
        serviceName : "Children Playroom",
        description : "No need to worry about what your kids are up to when you're away. A playroom with all the most fun things is free for all kids",
        image : "images/kids-small.jpg"
    },
    {
        serviceName : "Free Parking",
        description : "Free, secure parking is available for all patrons",
        image : "images/parking-small.jpg"
    },
    {
        serviceName : "Indoor Pool",
        description : "Along with gym facilities, the indoor pool is a great spot to chill and relax",
        image : "images/pool-small.jpg"
    }
];

const fillSpotlightSub = function(services){
    services.forEach(service => {
        spotlightSub.insertAdjacentHTML("beforeend",
        `
                <div class="spotlight-sub-card unloaded">
                    <img src="${service.image}" alt="${service.serviceName} image">
                    <div class="spotlight-description">
                        <h3 class="dm-text">${service.serviceName}</h3>
                        <p class="pt-text">${service.description}</p>
                    </div>
                </div>`);
    });
    spotlightCards = document.querySelectorAll(".spotlight-sub-card");
};

fillSpotlightSub(services);

// SCROLLLING

scrollSuiteBtn.addEventListener("click", () => {
    suiteArea.scrollIntoView({behavior: "smooth"})
});
scrollWeddingBtn.addEventListener("click", () => {
    receptionArea.scrollIntoView({behavior: "smooth"})
});

// INTERSECTION OBSERVER AND ANIMATIONS
const loadSection = (section) => {
    section.classList.remove("unloaded");
    section.classList.add("loaded");
}

const observer = new IntersectionObserver((sections, observer) => {
    sections.forEach(section => {
        if(section.isIntersecting){
            loadSection(section.target);
            observer.unobserve(section.target);
        }
    });
});

if("IntersectionObserver" in window) {
    multiSections.forEach(section => {
        observer.observe(section)
    })
}else {
    multiSections.forEach(section => {loadSection(section)});
};


let i = -1;
const loopSpotlights = setInterval(() => {
    if(i == spotlightCards.length) clearInterval(loopSpotlights);
    if(i < spotlightCards.length - 1){ i++
    spotlightCards[i].classList.remove("unloaded");
    spotlightCards[i].classList.add("loaded");
    }
}, 150)