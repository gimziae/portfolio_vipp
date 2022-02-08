const body = document.querySelector("body");
const header = document.querySelector("#header");
const btnCall = header.querySelector(".btnCall");
const menuMo = header.querySelector(".menuMo");

const joinWeb = header.querySelector(".menuWeb .joinWeb");
const logIn = joinWeb.querySelector(".login");
const logPop = joinWeb.querySelector(".popup");
console.log(logPop);
console.log(logIn);

btnCall.addEventListener("click", e=>{

    btnCall.classList.toggle("on");
    menuMo.classList.toggle("on");
})

logIn.addEventListener("click", e=>{
    logPop.classList.toggle("on");
})
logIn.addEventListener("mouseenter", e=>{
    logPop.classList.toggle("on");
})
