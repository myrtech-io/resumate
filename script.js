const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");
if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active");
    })
}
if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active");
    })
}


// Reload Animation
const girl = document.querySelector(".girl");
girl.addEventListener("pageRendered", () => {
    girl.style.right = "60px";
})

// FAQ

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {

        // Uncomment in
        //     case you only want to allow
        // for the display of only one collapsed item at a time!

        const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
        if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
            currentlyActiveAccordionItemHeader.classList.toggle("active");
            currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        }

        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        } else {
            accordionItemBody.style.maxHeight = 0;
        }

    });
});

// Video Player
const watchVideo = document.querySelector("#watchVideo");
const videoClipart = document.querySelector(".video-desc-clipart");
const videoCard = document.querySelector(".video-card");
const videoExit = document.querySelector(".uil-times-circle");


watchVideo.addEventListener("click", () => {
    videoCard.style.transform = "scale(1)";
    videoCard.style.display = "flex";
    videoClipart.style.backgroundSize = "contain";
})

videoExit.addEventListener("click", () => {
    videoClipart.style.backgroundSize = "30rem";
    videoCard.style.display = "none";
    videoExit.style.display = "none";
})