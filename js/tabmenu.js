const dts = document.querySelectorAll("dt");
const dds = document.querySelectorAll("dd");
const dts_btn = document.querySelectorAll("dt a");

const faq = document.querySelector(".tab_faq");
const lis = faq.querySelectorAll("li");
console.log(lis);

lis.forEach((li,index)=>{

    li.addEventListener("click", e=>{
        e.preventDefault();

        if(li.classList.contains("on")){
            li.classList.remove("on");

        }else lis[index].classList.add("on");
        
    })
})


dts_btn.forEach((el,index)=>{
    
    el.addEventListener("focusin", e=>{

        active(dts_btn, index);
        active(dds, index);
    })
})

dts.forEach((dt, index)=>{

    dt.addEventListener("click", e=>{
        e.preventDefault();
        
        let isOn = e.currentTarget.classList.contains("on");
        if(isOn) return;
        
        active(dts,index);
        active(dds,index);
    })
})


function active(items, index){
    for(let el of items){
        el.classList.remove("on");
    }
    items[index].classList.add("on");
}
