const main = document.querySelector("body");
const frame = document.querySelector("#list");
console.log(frame);
const loading = document.querySelector(".loading");
const input = document.querySelector("#search");
const btnSearch = document.querySelector(".btnSearch");

const base = "https://www.flickr.com/services/rest/?";
const key = "c28ef65e9616935b8277269f68f1a99d";
const method1 = "flickr.interestingness.getList";
const method2 = "flickr.photos.search";
const method3 = "flickr.people.getPhotos";
const per_page = 30;
const format = "json";

const url =`${base}method=${method1}&api_key=${key}&per_page=${per_page}&format=json&nojsoncallback=1`;

const username = "194860798@N08";

const url3 = `${base}method=${method3}&api_key=${key}&per_page=${per_page}&format=${format}&nojsoncallback=1&user_id=${username}`;

callData(url3);

btnSearch.addEventListener("click", e=>{
    let tag = input.value;
    tag = tag.trim();
    console.log(tag);

    //키워드를 통한 이미지를 요청하는 주소 
    const url = `${base}method=${method2}&api_key=${key}&per_page=${per_page}&format=${format}&nojsoncallback=1&tags=${tag}&privacy_filter=1`; 

    if(tag !=""){
        callData(url); 
    }else{
        console.log("검색어를 입력하세요")
    }  
})

input.addEventListener("keypress", e=>{
    if(e.keyCode ==13){
        let tag = input.value;
        tag = tag.trim();

        //키워드를 통한 이미지를 요청하는 주소 
        const url = `${base}method=${method2}&api_key=${key}&per_page=${per_page}&format=${format}&nojsoncallback=1&tags=${tag}&privacy_filter=1`; 

        if(tag !=""){
            callData(url); 
        }else{
            console.log("검색어를 입력하세요")
        }   
    }
})

// 동적 레이어팝업 생성
frame.addEventListener("click", e=>{
    e.preventDefault();

    let target = e.target.closest(".item");
    let imgSrc = target.querySelector("a").getAttribute("href"); 

    let pop = document.createElement("aside");
    let pops = `
                <img src="${imgSrc}">
                <span class="close">close</span>
                `;

    pop.innerHTML = pops;

    main.append(pop);
});

// 팝업 제거 이벤트
main.addEventListener("click", e=>{
    let pop = e.target.closest("aside");
    let close = pop.querySelector(".close");
    if(e.target == close) pop.remove();
})

function callData(url){
    frame.innerHTML = '';
    loading.classList.remove("off");
    frame.classList.remove("on");

    fetch(url)
    .then(data=>{
        let result = data.json();
        return result;
    })
    .then(json=>{
        let items = json.photos.photo;

        if(items.length > 0){
            createList(items);
            delayLoading();
        }else{
            loading.classList.add("off");
            alert("검색하신 이미지의 데이터가 없습니다.");
        }
    })

}
function createList(items){
    let htmls = '';

    items.map(data=>{
        let imgSrc = `https://live.staticflickr.com/${data.id}/${data.id}_${data.secret}_m.jpg`
        let imgSrcBic = `https://live.staticflickr.com/${data.id}/${data.id}_${data.secret}_b.jpg`

        htmls += `
                <li class="item">
                    <div>
                        <a href=${imgSrcBic}>
                            <img class="thumb" src=${imgSrc}>
                        </a>
                        <p>${data.title}</p>
                    </div>
                </li>
                `;
    })

    frame.innerHTML = htmls;
}

function delayLoading(){
    const imgs = frame.querySelectorAll("img");
    const len = imgs.length;
    let count = 0;

    for(let el of imgs){

        el.onload = ()=>{
            count++;
            
            if(count == len) isoLayout();
        }

        let thumb = el.closest(".item").querySelector(".thumb");

        thumb.onerror = e=>{
            e.currentTarget.closest(".item").querySelector("thumb").setAttribute("src", "img/loading.gif");
        }
        // let profile = el.closest(".item").querySelector(".profile");

        // profile.onerror = function(e){
        //     e.currentTarget.closest(".item").querySelector("profile").setAttribute("src", "img/loading.gif");
        // }
    }
}

function isoLayout(){

    loading.classList.add("off");
    frame.classList.add("on");

    new Isotope("#list", {
        itemSelector : ".item",
        columnWidth : ".item",
        transitionDuration : "0.5s"
    })
}