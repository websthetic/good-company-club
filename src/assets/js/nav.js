(() => {
    // Configuration
    const CONFIG = {
        SELECTORS: {
            navigation: "#cs-navigation",
        },
        CLASSES: {
            hidden: "cs-hidden",
        },
    };

    // DOM Elements
    const nav = document.querySelector(CONFIG.SELECTORS.navigation);

    // Scroll Management
    let lastScroll = 0;
    const SCROLL_THRESHOLD = 10; // px before triggering hide/show

    const scrollManager = {
        handle() {
            const current = window.scrollY;

            // ignore tiny scroll jitters
            if (Math.abs(current - lastScroll) < SCROLL_THRESHOLD) return;

            if (current > lastScroll && current > 80) {
                // scrolling down — hide
                nav.classList.add(CONFIG.CLASSES.hidden);
            } else {
                // scrolling up — show
                nav.classList.remove(CONFIG.CLASSES.hidden);
            }

            lastScroll = current;
        },
    };

    // Event Listeners
    window.addEventListener("scroll", scrollManager.handle, { passive: true });
})();