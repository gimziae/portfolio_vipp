/* 
79c0df25605b0f7facb1369d9be6fe68
 */

var mapContainer = document.getElementById('map'); // 지도를 표시할 div 

const branch_btns = document.querySelectorAll(".branch li");
const branch_info = document.querySelectorAll("#branchInfo article");

console.log(branch_info);
let zoom = true; //확대 축소 가능
let drag = false; // 드래그 가능

var mapOptions = { 
	center: new kakao.maps.LatLng(37.5120725,127.057503), //지도의 중심좌표.
    level: 3 // 지도의 확대 레벨
};

//지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOptions); 

  
//마커 생성하기
var markerOptions =[
    {
        title: "Main",
        latlng: new kakao.maps.LatLng(37.5120725,127.057503),
        imgSrc: 'img/marker.png',
        imgSize: new kakao.maps.Size(100, 100),
        imgPos: {offset: new kakao.maps.Point(116, 69)},
        button: branch_btns[0],
        info: branch_info[0]
    },
    {
        title: "Branch1",
        latlng: new kakao.maps.LatLng(37.266444,126.9972137),
        imgSrc: 'img/marker.png',
        imgSize: new kakao.maps.Size(100, 100),
        imgPos: {offset: new kakao.maps.Point(116, 69)},
        button: branch_btns[1],
        info: branch_info[1]
    },
    {
        title: "Branch2",
        latlng: new kakao.maps.LatLng(37.5243081,126.9522836),
        imgSrc: 'img/marker.png',
        imgSize: new kakao.maps.Size(100, 100),
        imgPos: {offset: new kakao.maps.Point(116, 69)},
        button: branch_btns[2],
        info: branch_info[2]
    }
];

for(let i=0; i<markerOptions.length; i++){
    new kakao.maps.Marker({
        map: map,
        position: markerOptions[i].latlng,
        title: markerOptions[i].title,
        image: new kakao.maps.MarkerImage(markerOptions[i].imgSrc, markerOptions[i].imgSize, markerOptions.imgPos)
    });

    //branch 버튼을 클릭했을 때 해당위치로 이동 및 버튼 활성화 
    markerOptions[i].button.onclick = e=>{
        e.preventDefault();

        for(let k=0; k<markerOptions.length; k++){
            markerOptions[k].button.classList.remove("on");
            markerOptions[k].info.classList.remove("on");
        }
        markerOptions[i].button.classList.add("on");
        markerOptions[i].info.classList.add("on");

        moveTo(markerOptions[i].latlng);
    }
}


window.onresize = ()=>{

    let active_btn = document.querySelector(".branch li.on");
    let active_index = active_btn.getAttribute("data-index");

    map.setCenter(markerOptions[active_index].LatLng);
}

//지도 이동함수 정의
function moveTo(target) {            

    var moveLatLon = target;

    map.setCenter(moveLatLon);
}
