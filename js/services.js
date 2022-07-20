const spotlightSub = document.querySelector(".spotlight-sub");

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
                <div class="spotlight-sub-card">
                    <img src="${service.image}" alt="${service.serviceName} image">
                    <div class="spotlight-description">
                        <h3 class="dm-text">${service.serviceName}</h3>
                        <p class="pt-text">${service.description}</p>
                    </div>
                </div>`);
    });
};

fillSpotlightSub(services);
