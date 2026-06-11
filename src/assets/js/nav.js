(() => {
    const nav = document.querySelector("#cs-navigation");
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
        const current = window.scrollY;

        if (current > lastScroll && current > 80) {
            // scrolling down — hide
            nav.classList.add("cs-hidden");
        } else if (current <= 10) {
            // only show again when back at the very top
            nav.classList.remove("cs-hidden");
        }

        lastScroll = current;
    }, { passive: true });
})();