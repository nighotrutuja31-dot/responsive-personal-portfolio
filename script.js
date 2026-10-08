/* =========================================
   LOADER
========================================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        document
            .getElementById("loader")
            .classList.add("hide");

    }, 700);

});


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");


menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("show");

    const icon =
        menuToggle.querySelector("i");

    if (navMenu.classList.contains("show")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/* Close menu after clicking navigation */

document
    .querySelectorAll(".nav-link")
    .forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("show");

            const icon =
                menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        });

    });


/* =========================================
   DARK / LIGHT MODE
========================================= */

const themeToggle =
    document.getElementById("themeToggle");

const themeIcon =
    themeToggle.querySelector("i");


const savedTheme =
    localStorage.getItem("portfolioTheme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeIcon.classList.remove("fa-moon");

    themeIcon.classList.add("fa-sun");

}


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const isDark =
        document.body.classList.contains("dark");


    if (isDark) {

        themeIcon.classList.remove("fa-moon");

        themeIcon.classList.add("fa-sun");

        localStorage.setItem(
            "portfolioTheme",
            "dark"
        );

    } else {

        themeIcon.classList.remove("fa-sun");

        themeIcon.classList.add("fa-moon");

        localStorage.setItem(
            "portfolioTheme",
            "light"
        );

    }

});


/* =========================================
   TYPING ANIMATION
========================================= */

const typingText =
    document.getElementById("typingText");


const roles = [

    "Web Developer",

    "Data Analyst",

    "Python Developer",

    "MCA Student",

    "Data Enthusiast"

];


let roleIndex = 0;

let charIndex = 0;

let deleting = false;


function typeEffect() {

    const currentRole =
        roles[roleIndex];


    if (!deleting) {

        typingText.textContent =
            currentRole.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (
            charIndex ===
            currentRole.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1200
            );

            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            roleIndex++;


            if (
                roleIndex >=
                roles.length
            ) {

                roleIndex = 0;

            }

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 50 : 90
    );

}


typeEffect();


/* =========================================
   PROJECT FILTER
========================================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectCards =
    document.querySelectorAll(".project-card");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        const filter =
            button.dataset.filter;


        projectCards.forEach(card => {

            const category =
                card.dataset.category;


            if (
                filter === "all" ||
                category === filter
            ) {

                card.classList.remove("hide");

            } else {

                card.classList.add("hide");

            }

        });

    });

});


/* =========================================
   PROJECT MODAL
========================================= */

const modal =
    document.getElementById("projectModal");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalTech =
    document.getElementById("modalTech");

const modalClose =
    document.getElementById("modalClose");

const projectButtons =
    document.querySelectorAll(".project-btn");


projectButtons.forEach(button => {

    button.addEventListener("click", () => {

        const title =
            button.dataset.title;

        const description =
            button.dataset.description;

        const tech =
            button.dataset.tech;


        modalTitle.textContent =
            title;

        modalDescription.textContent =
            description;


        modalTech.innerHTML = "";


        tech.split(",").forEach(item => {

            const tag =
                document.createElement("span");

            tag.textContent =
                item.trim();

            modalTech.appendChild(tag);

        });


        modal.classList.add("show");

        document.body.style.overflow =
            "hidden";

    });

});


function closeModal() {

    modal.classList.remove("show");

    document.body.style.overflow =
        "";

}


modalClose.addEventListener(
    "click",
    closeModal
);


modal.addEventListener(
    "click",
    event => {

        if (
            event.target === modal
        ) {

            closeModal();

        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeModal();

        }

    }
);


/* =========================================
   ANIMATED COUNTERS
========================================= */

const counters =
    document.querySelectorAll(".counter");

let countersStarted = false;


function startCounters() {

    if (countersStarted) {
        return;
    }


    const statsSection =
        document.querySelector(".stats-section");


    const rect =
        statsSection.getBoundingClientRect();


    if (
        rect.top <
        window.innerHeight - 100
    ) {

        countersStarted = true;


        counters.forEach(counter => {

            const target =
                Number(
                    counter.dataset.target
                );


            let current = 0;


            const increment =
                Math.ceil(target / 50);


            const timer =
                setInterval(() => {

                    current += increment;


                    if (
                        current >= target
                    ) {

                        counter.textContent =
                            target;

                        clearInterval(timer);

                    } else {

                        counter.textContent =
                            current;

                    }

                }, 30);

        });

    }

}


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    revealElements.forEach(element => {

        const top =
            element.getBoundingClientRect().top;


        if (
            top <
            window.innerHeight - 80
        ) {

            element.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);


revealOnScroll();


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


function updateActiveNav() {

    let current = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;


        if (
            window.scrollY >=
            sectionTop
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove(
            "active"
        );


        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add(
                "active"
            );

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNav
);


/* =========================================
   BACK TO TOP
========================================= */

const backTop =
    document.getElementById("backTop");


window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 500
        ) {

            backTop.classList.add(
                "show"
            );

        } else {

            backTop.classList.remove(
                "show"
            );

        }

    }
);


backTop.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById(
        "contactForm"
    );

const toast =
    document.getElementById(
        "toast"
    );


contactForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const name =
            document
                .getElementById("name")
                .value
                .trim();


        const email =
            document
                .getElementById("email")
                .value
                .trim();


        const subject =
            document
                .getElementById("subject")
                .value
                .trim();


        const message =
            document
                .getElementById("message")
                .value
                .trim();


        if (
            name === "" ||
            email === "" ||
            subject === "" ||
            message === ""
        ) {

            alert(
                "Please fill in all fields."
            );

            return;

        }


        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (
            !emailPattern.test(email)
        ) {

            alert(
                "Please enter a valid email address."
            );

            return;

        }


        toast.classList.add(
            "show"
        );


        contactForm.reset();


        setTimeout(() => {

            toast.classList.remove(
                "show"
            );

        }, 3500);

    }
);


/* =========================================
   COUNTERS
========================================= */

window.addEventListener(
    "scroll",
    startCounters
);


/* =========================================
   SKILL ANIMATION
========================================= */

let skillsAnimated = false;


function animateSkills() {

    if (skillsAnimated) {
        return;
    }


    const skillsSection =
        document.getElementById(
            "skills"
        );


    const top =
        skillsSection.getBoundingClientRect().top;


    if (
        top <
        window.innerHeight - 100
    ) {

        skillsAnimated = true;


        document
            .querySelectorAll(
                ".progress span"
            )
            .forEach(bar => {

                const width =
                    bar.style.width;


                bar.style.width = "0";


                setTimeout(() => {

                    bar.style.width =
                        width;

                }, 150);

            });

    }

}


window.addEventListener(
    "scroll",
    animateSkills
);


/* =========================================
   PAGE TITLE EFFECT
========================================= */

document.addEventListener(
    "visibilitychange",
    () => {

        if (
            document.visibilityState ===
            "visible"
        ) {

            document.title =
                "Rutuja Nighot | Portfolio";

        } else {

            document.title =
                "Come Back 👋";

        }

    }
);