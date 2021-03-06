const getPosBtn=document.querySelector(".getPosition");

var circle = new naver.maps.Circle({
    map: map,
    center: new naver.maps.LatLng(37.265686,126.998787),
    radius:0,
    fillColor: 'crimson',
    fillOpacity: 1.0
});

function handleSuccess(position) {
    const lat=position.coords.latitude.toPrecision(9);
    const lng=position.coords.longitude.toPrecision(10);
    
    map.setCenter(new naver.maps.LatLng(lat,lng));
    circle.setCenter(new naver.maps.LatLng(lat,lng));
    circle.setRadius(25);

}

function handleError() {
    alert("위치를 받아 올 수 없습니다.");
    circle.setCenter(new naver.maps.LatLng(37.265686,126.998787));
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError,{enableHighAccuracy:true});
}

