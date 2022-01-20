const faq = document.querySelector("#faq");
const lis = faq.querySelectorAll("li");
const enableClick = true;

lis.forEach((li,index)=>{
    li.addEventListener("click", e=>{
        e.preventDefault();

        if(li.classList.contains("on")){
            lis[index].classList.remove("on");

        }else{
            lis[index].classList.add("on");
        }
    })  
})


