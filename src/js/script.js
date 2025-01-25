document.addEventListener('DOMContentLoaded', () =>{
    const mobileBtn = document.querySelector (".mobile-btn");
    const mobileMenu = document.querySelector (".navbar");

    mobileBtn.addEventListener("click", ()=>{
        mobileMenu.classList.toggle("mobile-btn-open");
    });
});
/* Scroll */

function scrollToSection(sectionId){
    const section = document.querySelector(sectionId);

    if(section){
        let scrollOffset = 0;

        if(sectionId === "#projects"){
            scrollOffset = section.offsetTop - 70;
        } else {
            scrollOffset = section.offsetTop - (window.innerHeight - section.clientHeight) / 2;
        }

        window.scrollTo({
            top: scrollOffset,
            behavior: 'smooth'
        })