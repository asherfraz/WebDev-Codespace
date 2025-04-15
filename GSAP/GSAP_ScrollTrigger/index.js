gsap.to("#page2 h1", {
    transform: "translateX(-220%)",
    // transform: "translateX(0%)",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -150%",
        scrub: 2,
        pin: true,

    }
})