let map;
let marker;

window.initMap = function () {
  const initialLatLng = { lat: 35.6812, lng: 139.7671 }; // 東京駅付近（初期位置）

  map = new google.maps.Map(document.getElementById("map"), {
    center: initialLatLng,
    zoom: 8,
  });

  map.addListener("click", (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();

    if (marker) marker.setMap(null);

    marker = new google.maps.Marker({
      position: { lat: lat, lng: lng },
      map: map,
    });

    document.querySelector("#post_latitude").value = lat;
    document.querySelector("#post_longitude").value = lng;
  });
};
