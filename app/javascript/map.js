let map;
let marker;

function loadGoogleMapsScript(callback) {
  const script = document.createElement("script");
  script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyD1GLnINEghIo9Pu9lKGr6dTg-qusJ7MvI";
  script.async = true;
  script.defer = true;
  script.onload = callback;
  document.head.appendChild(script);
}

function initMap() {
  console.log("initMap実行");

  const defaultLocation = { lat: 35.681236, lng: 139.767125 };
  map = new google.maps.Map(document.getElementById("map"), {
    center: defaultLocation,
    zoom: 10,
  });

  map.addListener("click", function (e) {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();

    if (marker) marker.setMap(null);

    marker = new google.maps.Marker({
      position: { lat, lng },
      map: map,
    });

    document.getElementById("post_latitude").value = lat;
    document.getElementById("post_longitude").value = lng;
  });
}

// Turbo対応
document.addEventListener("turbo:load", function () {
  if (document.getElementById("map")) {
    loadGoogleMapsScript(initMap);
  }
});
