const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");

hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
});



const hlink = document.querySelectorAll("#hlink");
hlink.forEach(hlink =>{
    
    hlink.addEventListener("click", ()=>{
        menu.classList.toggle("hidden")
    });

});

