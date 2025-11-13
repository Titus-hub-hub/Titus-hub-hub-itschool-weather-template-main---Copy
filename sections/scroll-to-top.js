//Scroll to top function

const scrollToTop = document.querySelector(".scroll-to-top");
scrollToTop.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})

document.addEventListener("scroll", function(){
    const pageHeight = innerHeight;
    if (window.scrollY > (pageHeight/2)){
        scrollToTop.style.visibility = "visible";
    } else {
        scrollToTop.style.visibility = "hidden";
    }
})