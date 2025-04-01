let dayNight=document.querySelector(".dayNight");
let head=document.querySelector(".head");
dayNight.addEventListener("click",()=>{
    head.classList.toggle("night");
});

let typingEffect=new Typed("#text",{
    strings:["Web Developer","App Developer","AI Engineer"],
    loop:true,
    typingSpeed:10000,
    backSpeed:120,
    backDelay:100

});



    