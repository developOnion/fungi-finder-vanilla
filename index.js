const hamburgerBtn = document.querySelector(
    '[aria-controls="primary-navigation"]'
);

const navigation = document.querySelector("#primary-navigation");

hamburgerBtn.addEventListener("click", () => {
    const isNavOpen = hamburgerBtn.getAttribute("aria-expanded");
    hamburgerBtn.setAttribute(
        "aria-expanded",
        isNavOpen === "false" ? true : false
    );
});
