let slide =document.querySelectorAll(".clientsReview");
let count = 0;

slide.forEach(function(slides , index){
    slides.style.left =`${index * 100}%`
 })
 function myFun(){
    slide.forEach(function(curVal){
        curVal.style.transform=`translateX(-${count * 100}%)`
    })
 }
setInterval(function(){
    count++;
    if(count==slide.length)
        count=0;
myFun()
}, 2000);

const pathName = window.location.pathname;
const pageName =pathName.split("/").pop();
// let slide = document.querySelectorAll(".home");
if(pageName === "main"){
    document.querySelector(".home").classList.add("activeLink");
}
if(pageName === "index.html"){
    document.querySelector(".clients").classList.add("activeLink");
}
if(pageName === "index.html"){
    document.querySelector(".home").classList.add("activeLink");
}