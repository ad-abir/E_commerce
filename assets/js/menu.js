const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active");
    });

    close.addEventListener("click", () => {
        nav.classList.remove("active");
    });

    window.onscroll = () => {
        nav.classList.remove("active");
    };
}