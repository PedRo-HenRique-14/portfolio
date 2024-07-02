const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const projectCards = document.querySelectorAll(".project-card");
projectCards.forEach((elm) => obs.observe(elm));