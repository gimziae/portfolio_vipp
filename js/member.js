const frame = document.querySelector(".member_info");

console.log(frame);

fetch("data/member.json")
.then(data=>{
    return data.json();
    
})
.then(json => {

    const memberInfo = json.data;
    
    let tags = '';
    memberInfo.map(member=>{
        tags += `
                <article>
                    <img src="${member.pic}">
                    <h2>${member.name}</h2>
                    <p>${member.position}</p>
                </article>
                 `;
    })
    frame.innerHTML = tags;
})