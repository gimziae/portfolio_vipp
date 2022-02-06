/*
AIzaSyBLmcoTvbceDJAzuKFsH7ks2aR4MwwJqn4
http://www.googleaips.com/youtube/v3/playlistItems

*/ 

const vidList = document.querySelector(".vidList");
const key = "AIzaSyBLmcoTvbceDJAzuKFsH7ks2aR4MwwJqn4";
const playlistId = "PLOK2vR6uL5S2AEhapjLmpYE2WIfe_9HWR";
const num = 10;
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`; 


fetch(url)
.then(data=>{

    return data.json();
    
})
.then(json=>{
   
    let items = json.items;
    console.log(items);

    let result = "";

    items.map(item=>{

        let title = item.snippet.title;
        if(title.length > 50){
            title = title.substr(0, 50)+"...";
        }

        let description = item.snippet.description;
        if(description.length > 250){
            description = description.substr(0, 250)+"  ... more";
        }

        let date = item.snippet.publishedAt;
        date = date.split("T")[0];

        result += `
                <article>
                    <div class="pic">
                        <a href="${item.snippet.resourceId.videoId}">
                            <img src="${item.snippet.thumbnails.medium.url}" class="thumb">    
                            <span><i class="fas fa-play"></i></span>
                        </a>
                    </div>
                    <div class="con">
                        <h2>${title}</h2>
                        <p>${description}</p>
                        <span>${date}</span>
                    </div>
                    
                </article>
                `;
    });

    vidList.innerHTML = result;

})

vidList.addEventListener("click", e=>{
    e.preventDefault(); 

    const vidId = e.target.closest("article").querySelector("a").getAttribute("href"); 

    let pop = document.createElement("figure");
    pop.classList.add("pop"); 
    pop.innerHTML = `
                    <iframe src="https://www.youtube.com/embed/${vidId}" frameborder="0" allowfullscreen class="vidPlay"></iframe>
                    <span class="btnClose"><i class="far fa-window-close"></i></span>
                    `; 

    vidList.append(pop); 
})

vidList.addEventListener("click", e=>{
    const pop = vidList.querySelector("figure");

    if(pop !=null){
        const close = pop.querySelector("span");

        if(e.target = close){
            e.target.closest("figure").remove();
        }
    }
})