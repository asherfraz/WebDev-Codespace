document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".btn")

    const tl = gsap.timeline({
        // repeat: -1,
        // repeatDelay: 1,
        // yoyo: true,
    })

    tl.to("#box", {
        x: 1000,
        rotate: 360,
        duration: 2,
        delay: 0.5,
        ease: "power2.inOut",
        // repeat: -1,
        yoyo: true,
        // CSS Styles
        borderRadius: "10%"
    })

    tl.to("#box2", {
        x: 1000,
        rotate: 360,
        duration: 2,
        delay: 0.5,
        ease: "power3.inOut",
        // CSS Styles
        borderRadius: "50%"
    })

    tl.to("#box3", {
        x: 1000,
        duration: 2,
        delay: 0.5,
        ease: "bounce.inOut",
    })

    gsap.from(btn, {
        y: 200,
        opacity: 0,
        duration: 2,
        delay: 1,
        scale: 0.005,
        stagger: 2
    })

    btn.addEventListener("click", () => {
        // reload the animations
        window.location.reload()
    })


    setTimeout(() => {
        // reload the animations
        window.location.reload()
    }, 10000)

})