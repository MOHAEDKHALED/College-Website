
let span = document.querySelector(".up");

window.onscroll = function () {
    if (this.scrollY >= 300) {
        span.classList.add("display");
    }
    else {
        span.classList.remove("display");
    }
};

span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
};
