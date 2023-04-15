let home = document.getElementById("home");
// let head=document.getElementById("header");
let openBtn=document.querySelector("#openNav");
let closeBtn=document.querySelector("#closeNav")
let navMenu=document.querySelector("#offcanvasNav");
let dropBtn=document.querySelector("#dropBtn");
let dropContent=document.querySelector("#dropContent")
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let img1 = document.getElementById("homeimg");
let homebtn=document.getElementsByClassName("homebtn");
let homeDiv=document.getElementById("sub_title");
let h1=document.getElementById("h1");
let p1=document.getElementById("p1");
let photos = ["assets/la.jpg", "assets/chicago.jpg", "assets/ny.jpg"];
let cities=["Los Angeles","Chicago", "New York"]
let activities=["We had the best time playing at Venice Beach!", 
                    "Fans enjoyed our company in Chicago streets!",
                "Our instrumentals were felt on all corners of New York City!"]
// head.style.backgroundColor="yellow";

openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
dropBtn.addEventListener('click', openDropMenu);

function openMenu(){
    openBtn.style.display="none";
    navMenu.style.display="block"
    closeBtn.style.display="block";
}

function closeMenu(){
     navMenu.style.display="none";
    closeBtn.style.display="none";
    openBtn.style.display="block";
}
function openDropMenu(){
    dropContent.style.display="block";
}






i=0;
let goBack = function () {
    i--;
    if (i < 0) {
        i = photos.length - 1
    }
    img1.src = photos[i];
    h1.innerText=cities[i];
    p1.innerText=activities[i];
}
let goFront = function () {
    
    i++;
    if (i >= photos.length) {
        i = 0;
    }
    
    img1.src = photos[i];
    h1.innerText=cities[i];
    p1.innerText=activities[i];

}

prev.addEventListener("click", goBack);
next.addEventListener("click", goFront);


let search = document.getElementById("search");
search.oninput = function () {
    search.style.color = "white";
}


setInterval(goFront, 5000);