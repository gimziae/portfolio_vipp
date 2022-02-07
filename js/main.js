const body = document.querySelector("body");
const header = document.querySelector("#header");
const btnCall = header.querySelector(".btnCall");
const menuMo = header.querySelector(".menuMo");


console.log(menuMo);

btnCall.addEventListener("click", e=>{

    btnCall.classList.toggle("on");
    menuMo.classList.toggle("on");
})



// const subTitle = document.querySelector(".sub_visual .wrap");
// console.log(subTitle);