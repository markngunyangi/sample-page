const lines = document.querySelector(".lines");
const navbar = document.querySelector(".nav-bar");
const links = document.querySelectorAll(".nav-links li");


lines.addEventListener("click", () => {
    navbar.classList.toggle("open");
    links.forEach(link =>{
        link.classList.toggle("fade");
    });
    //hamburger Animation
    navbar.classList.toggle('toggle');
});
