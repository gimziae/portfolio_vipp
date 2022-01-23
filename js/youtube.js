/*
AIzaSyBLmcoTvbceDJAzuKFsH7ks2aR4MwwJqn4
http://www.googleaips.com/youtube/v3/playlistItems

*/ 

const vidList = document.querySelector(".vidList");
const key = 'AIzaSyBLmcoTvbceDJAzuKFsH7ks2aR4MwwJqn4';
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

    let result = '';

    items.map(item=>{
        result += `
                    <article>
                        <a href="${item.snippet.resourceId.videoId}" class="pic">
                            <img class="thumb" src="${item.snippet.thumbnails.medium.url}" alt="">
                        </a>
                        <div class="con">
                            <h2>${item.snippet.title}</h2>
                        </div>
                    </article>                   
                  `;
    })

    vidList.innerHTML = result;
})

vidList.addEventListener("click", ()=>{
    e.preventDefault();

    const vidId = e.target.closest("a").getAttribute("href");
    let pop = document.createElement("figure");
    pop.classList.add("pop");
    pop.innerHTML = `
                    <iframe width="560" height="315" src="${vidId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <span class=btnClose>CLOSE</span>
                    `;
    vidList.append(pop);
})