const faq = document.querySelector("#faq");
const lis = faq.querySelectorAll("li");
console.log(lis);

lis.forEach((li,index)=>{
    li.addEventListener("click", e=>{
        e.preventDefault();

        for(let i=0; i<lis.length; i++){
            lis[i].classList.remove("on");

        }
        lis[index].classList.add("on");
    })
})
