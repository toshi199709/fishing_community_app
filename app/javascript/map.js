let map;
let marker;
let indexMap;

// ✅ 新規投稿ページ用の地図初期化関数
window.initMap = function () {
  const defaultLocation = { lat: 35.681236, lng: 139.767125 };
  const mapElement = document.getElementById("map");
  if (!mapElement) return;

  map = new google.maps.Map(mapElement, {
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
};

// ✅ 一覧ページ用の地図初期化関数
window.initIndexMap = function () {
  const mapElement = document.getElementById("index-map");
  if (!mapElement) return;

  indexMap = new google.maps.Map(mapElement, {
    center: { lat: 35.681236, lng: 139.767125 },
    zoom: 5,
  });

  const posts = JSON.parse(mapElement.dataset.posts);

  posts.forEach((post) => {
    new google.maps.Marker({
      position: { lat: post.latitude, lng: post.longitude },
      map: indexMap,
    });
  });
};

// ✅ Turbo対応：どちらのページかを判別して適切な地図を初期化
document.addEventListener("turbo:load", () => {
  if (typeof google !== "undefined" && typeof google.maps !== "undefined") {
    if (document.getElementById("index-map")) {
      initIndexMap(); // 一覧ページ
    }

    if (document.getElementById("map")) {
      initMap(); // 新規投稿ページ
    }
  }
});
