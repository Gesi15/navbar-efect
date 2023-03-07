const navbarEl = document.querySelector(".navbar");

const bottomcontainerEl = document.querySelector(".bottom-container");

//console.log(navbarEl.offsetHeight);

//console.log(bottomcontainerEl.offsetTop);

window.addEventListener("scroll", ()=>{
    if(window.scrollY > bottomcontainerEl.offsetTop - navbarEl.offsetHeight - 50){
        navbarEl.classList.add("active");
    }else{
        navbarEl.classList.remove("active");
    }

})