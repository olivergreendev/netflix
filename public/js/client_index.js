const slider = document.querySelector(".carousel-box");
var scrollPerClick = 400;
var imagePadding = 20;
var scrollAmount = 0;

function sliderScrollLeft() {
    slider.scrollTo({
        top: 0,
        left: (scrollAmount -= scrollPerClick),
        behavior: "smooth"
    });

    if (scrollAmount < 0) { scrollAmount = 0; }
}

function sliderScrollRight() {
    if (scrollAmount <= slider.scrollWidth - slider.clientWidth) {
        slider.scrollTo({
            top: 0,
            left: (scrollAmount += scrollPerClick),
            behavior: "smooth"
        });
    }

    /**
     * This prints where the element is in terms of its scroll position
     * Use this to check if the element has reached its max length, or is at zero
     */
    console.log(slider.scrollLeft);
}

/**
 * If the slider scroll position is at zero, hide the switchLeft <a> tag
 * Same for the switchRight <a> tag if it is at the end of the scroll bar length
 */

for (var i = 0; i < 16; i++) {
    slider.insertAdjacentHTML(
        "beforeend",
        `<div class="slider-img">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2015_N_logo.svg" alt="">
            <a href="#" class="my-list-add">+</a>
        </div>`
    )
}

// scrollPerClick = document.querySelector(".slider-img").clientWidth + imagePadding;
// scrollPerClick = 400;