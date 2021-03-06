const dts = document.querySelectorAll("dt");
const dds = document.querySelectorAll("dd");
const dts_btn = document.querySelectorAll("dt a");
console.log(dts_btn);

window.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('details').forEach(function(item){
        item.addEventListener("toggle", e=>{
            let toggled = e.target;
            if(toggled.attributes.open){
                document.querySelectorAll('details[open]').forEach(function(opened){
                    if(toggled != opened)
                    opened.removeAttribute('open');
                })
            }
        })
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
