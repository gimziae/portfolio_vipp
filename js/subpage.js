const body = document.querySelector("body");
const headerSub = document.querySelector("#header_sub");
const btnCallSub = headerSub.querySelector(".btnCall");
const menuMoSub = headerSub.querySelector(".menuMo");

btnCallSub.addEventListener("click", e=>{
    e.preventDefault();

    btnCallSub.classList.toggle("on");
    menuMoSub.classList.toggle("on");
})


const subTitle = document.querySelector(".sub_visual .wrap");
console.log(subTitle);

window.addEventListener("load",()=>{

    subTitle.classList.add("on");
})