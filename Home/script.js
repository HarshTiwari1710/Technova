const collapse = document.querySelector(".collapse-img")
const nav = document.querySelector(".nav-bar-list")
const close = document.querySelector(".close")
const homeSection = document.querySelector(".home-section")
const backdrop = document.querySelector(".modalbackdrop")
collapse.addEventListener("click",function(){
        close.classList.add("active")
        nav.classList.add("responsive")
        backdrop.style.display = 'block'
})

close.addEventListener("click",function(){
    close.classList.remove("active")
    nav.classList.remove("responsive")
})

window.onscroll = function(){
    var currentScrollPos = window.pageYOffset;
    if(currentScrollPos > 295){
        close.classList.remove("active")
        nav.classList.remove("responsive")
    }
}