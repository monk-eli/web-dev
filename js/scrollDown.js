const scrollDown = function () {
    const scrollBtn = document.createElement("button");
    scrollBtn.innerHTML = "&darr;";
    scrollBtn.setAttribute("id", "scroll-btn");

    const element = document.getElementById("scroll-button-container")
    element.appendChild(scrollBtn);

    const scrollBtnDisplay = function () {
        window.scrollY > window.innerHeight
            ? scrollBtn.classList.add("show")
            : scrollBtn.classList.remove("show");
    };
    window.addEventListener("scroll", scrollBtnDisplay);

    const scrollWindow = function () {
        setTimeout(function () {
            window.scrollTo({
                behavior: "smooth",
                top: window.innerHeight
            });
        }, 10);
    };
    scrollBtn.addEventListener("click", scrollWindow);
}
scrollDown()

