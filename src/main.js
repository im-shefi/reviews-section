
// local reviews data
const reviews = [
    {
        name: "Ayla Bostock",
        job: "UX Designer",
        avatar: "img/avatar1.webp",
        review:
            "In all aspects of work, Project is not satisfied unless achieving the highest standards. Works relentlessly to improve skills and knowledge, and the quality of work output."
    },
    {
        name: "Ashlyn Davidson",
        job: "Full-Stack Developer",
        avatar: "img/avatar2.webp",
        review:
            "Considers problems as a challenge and enjoys finding creative yet appropriate solutions. Project is able to work out their own solutions, but also works well with a group to solve problems."
    },
    {
        name: "Anais Herring",
        job: "Web Analyst",
        avatar: "img/avatar3.webp",
        review:
            "Project pays great attention to detail. They always presented work properly checked and completely free of error."
    },
    {
        name: "Reid Ellwood",
        job: "Technical Consultant",
        avatar: "img/avatar4.webp",
        review:
            "Meticulous in keeping the workplace clean and tidy. Project makes a habit of keeping own area clean and hazard-free and also assists and encourages others to do the same."
    }
];

// review elements
const avatar = document.querySelector(".avatar-img");
const author = document.querySelector(".review-name");
const job = document.querySelector(".review-job");
const review = document.querySelector(".review-content");

// navigation buttons
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const random = document.querySelector(".surprise-btn");

// currently visible item by array index
let currentItem = 0;

// load item
window.addEventListener('DOMContentLoaded', () => {

    displayItem(currentItem);

});

// display item
function displayItem(item) {

    const displayItem = reviews[item];

    avatar.src = displayItem.avatar;
    author.textContent = displayItem.name;
    job.textContent = displayItem.job;
    review.textContent = displayItem.review;

}

// display next
next.addEventListener('click', () => {

    if(currentItem == reviews.length - 1)
        currentItem = -1;

    displayItem(++currentItem);

});

// display previous
previous.addEventListener('click', () => {

    if(currentItem == 0)
        currentItem = reviews.length;

    displayItem(--currentItem);

});

// random number
function randomIntFromInterval(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);

}

// display random
random.addEventListener('click', () => {

    let random = currentItem;
    // prevent getting the same review
    while(random == currentItem)
        random = randomIntFromInterval(0, reviews.length-1);

    currentItem = random;

    displayItem(currentItem);

});