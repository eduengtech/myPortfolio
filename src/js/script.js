document.addEventListener('DOMContentLoaded', () =>{
    const mobileBtn = document.querySelector (".mobile-btn");
    const mobileMenu = document.querySelector (".navbar");

    mobileBtn.addEventListener("click", ()=>{
        mobileMenu.classList.toggle("mobile-btn-open");
    });
});