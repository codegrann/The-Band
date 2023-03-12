let home = document.getElementById("home");
// let head=document.getElementById("header");
let openBtn=document.querySelector("#openNav");
let closeBtn=document.querySelector("#closeNav")
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let img1 = document.getElementById("homeimg");
let homebtn=document.getElementsByClassName("homebtn");
let homeDiv=document.getElementById("sub_title");
let h1=document.getElementById("h1");
let p1=document.getElementById("p1");
let photos = ["la.jpg", "chicago.jpg", "ny.jpg"];
// head.style.backgroundColor="yellow";

openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);

function openMenu(){
    openBtn.style.display="none";
    // navMenu.style.display="block"
    closeBtn.style.display="block";
}

function closeMenu(){
    //  navMenu.style.display="none";
    closeBtn.style.display="none";
    openBtn.style.display="block";
}






i=0;
let goBack = function () {
    i--;
    if (i < 0) {
        i = photos.length - 1
    }
    img1.src = photos[i];

   
}
let goFront = function () {
    
    i++;
    if (i >= photos.length) {
        i = 0;
    }
    
    img1.src = photos[i];
      

}
// let state=function(){
    // if(i=0){
    //    h1.innerHTML="Los Angeles";
    //    p1.innerHTML="We had the best time playing at Venice Beach!";
    // }
    // else if(i=1){
    //    h1.innerHTML="Chicago";
    //    p1.innerHTML="We had the best time playing at Venice Beach!";
    // }
    // else{
    //    h1.innerHTML="New York";
    //    p1.innerHTML="We had the best time playing at Venice Beach!";  
    // }
// }
let clearInterval=function(){
    clearInterval();
}
prev.addEventListener("mouseover", clearInterval);
prev.addEventListener("click", goBack);
// prev.addEventListener("click", state);
next.addEventListener("click", goFront);
// next.addEventListener("click", state);
// 
let search = document.getElementById("search");
search.oninput = function () {
    search.style.color = "white";
}


setInterval(goFront, 3000);





