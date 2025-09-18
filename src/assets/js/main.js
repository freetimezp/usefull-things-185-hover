document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(SplitText);

    const profileImageContainer = document.querySelector(".profile-images");
    const profileImages = document.querySelectorAll(".profile-images .img");
    const nameElements = document.querySelectorAll(".profile-names .name");
    const nameHeadings = document.querySelectorAll(".profile-names .name h1");

    nameHeadings.forEach((heading) => {
        const split = new SplitText(heading, { type: "chars" });
        split.chars.forEach((char) => {
            char.classList.add("letter");
        });
    });

    const defaultLetters = nameElements[0].querySelectorAll(".letter");
    gsap.set(defaultLetters, { y: "100%" });

    const section = document.querySelector(".team");
    const bgLayer = section.querySelector(".bg");

    if (window.innerWidth >= 900) {
        profileImages.forEach((img, index) => {
            const correspondingName = nameElements[index + 1];
            const letters = correspondingName.querySelectorAll(".letter");

            img.addEventListener("mouseenter", () => {
                gsap.to(img, {
                    width: 140,
                    height: 140,
                    duration: 0.5,
                    ease: "power4.out",
                });

                bgLayer.style.backgroundImage = `url(${img.querySelector("img").src})`;
                gsap.to(bgLayer, { opacity: 1, duration: 0.5, ease: "power4.inOut", zIndex: 1 });

                gsap.to(letters, {
                    y: "-100%",
                    ease: "power4.out",
                    duration: 0.75,
                    stagger: {
                        each: 0.025,
                        from: "center",
                    },
                });
            });

            img.addEventListener("mouseleave", () => {
                gsap.to(img, {
                    width: 100,
                    height: 100,
                    duration: 0.5,
                    ease: "power4.out",
                });

                gsap.to(bgLayer, { opacity: 0, duration: 0.5, ease: "power4.inOut" });

                gsap.to(letters, {
                    y: "0%",
                    ease: "power4.out",
                    duration: 0.75,
                    stagger: {
                        each: 0.025,
                        from: "center",
                    },
                });
            });
        });

        profileImageContainer.addEventListener("mouseenter", () => {
            gsap.to(defaultLetters, {
                y: "0%",
                ease: "power4.out",
                duration: 0.75,
                stagger: {
                    each: 0.025,
                    from: "center",
                },
            });
        });

        profileImageContainer.addEventListener("mouseleave", () => {
            gsap.to(defaultLetters, {
                y: "100%",
                ease: "power4.out",
                duration: 0.75,
                stagger: {
                    each: 0.025,
                    from: "center",
                },
            });
        });
    }
});
