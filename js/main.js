
// const sections = document.querySelectorAll("section");
// const rooms_article = document.querySelector("#rooms .inner article");
// let posArr = [];
// const base = -300;

// for(let el of sections){
//     posArr.push(el.offsetTop);
// }
// console.log(posArr);

// window.addEventListener("scroll", e=>{
//     let scroll = window.scrollY || window.pageYOffset;
    
//     rooms_article.style.display = ""

//     sections.forEach((el, index)=>{
//         if(scroll >= posArr[index] +base){

//         }
//     })
// })

const body = document.querySelector("body");
const header = document.querySelector("#header")
const btnCall = header.querySelector(".btnCall");
const menuMo = header.querySelector(".menuMo");

console.log(menuMo);

btnCall.addEventListener("click", e=>{
    e.preventDefault();

    btnCall.classList.toggle("on");
    menuMo.classList.toggle("on");

    
})

const rooms = document.querySelector("#rooms");
const roomImg = rooms.querySelectorAll("img");
const roomNav = rooms.querySelectorAll(".room li");
const roomInfo = rooms.querySelectorAll(".roomInfo");
console.log(roomInfo);

for(i=0; i<roomNav.length; i++){

    roomNav[i].addEventListener("click", e=>{
        e.preventDefault;

        for(let k=0; k<roomImg.length; k++){
            roomImg[k].classList.remove("on");
        }

        roomNav[i].classList.add("on");
        
    })
}