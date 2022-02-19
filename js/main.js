const body = document.querySelector("body");
const header = document.querySelector("#header");
const btnCall = header.querySelector(".btnCall");
const menuMo = header.querySelector(".menuMo");

const joinWeb = header.querySelector(".menuWeb .joinWeb");
const logIn = joinWeb.querySelector(".login");
const logPop = joinWeb.querySelector(".popup");

const introTxt = document.querySelector("#intro>.inner");
console.log(logPop);
console.log(logIn);
console.log(introTxt);

btnCall.addEventListener("click", e=>{

    btnCall.classList.toggle("on");
    menuMo.classList.toggle("on");
})

logIn.addEventListener("click", e=>{
    logPop.classList.toggle("on");
})
logIn.addEventListener("mouseenter", e=>{
    logPop.classList.add("on");
})

// window.addEventListener("load", ()=>{
//     introTxt.classList.add("on");
// })

// const intro = body.querySelector("#intro");
// const slides = intro.querySelectorAll(".swiper-slide img");

// const strong = intro.querySelector("strong");
// const span = intro.querySelector(".pagenum span");
// const total = slides.length - 2;
// console.log(total);

// span.innerText = total;

// for(let i=0; i<total; i++){
//     lis[i].addEventListener("click", e=>{
//         e.preventDefault();

//         let clickA = lis[i].querySelector("a");
//         let imgSrc = clickA.getAttribute("href");
//         console.log(imgSrc);
//         backImg.setAttribute("src", imgSrc);

//         for(let el of lis){
//             el.classList.remove("on");
//         }
//         lis[i].classList.add('on');
//         strong.innerText = i+1;
//     })
// }