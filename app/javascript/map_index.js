let indexMap;

window.initIndexMap = function () {
  const mapElement = document.getElementById("index-map");
  if (!mapElement) return;

  indexMap = new google.maps.Map(mapElement, {
    center: { lat: 35.681236, lng: 139.767125 },
    zoom: 5,
  });

  // 位置情報を埋め込んだデータセット
  const posts = JSON.parse(mapElement.dataset.posts);

  posts.forEach((post) => {
    new google.maps.Marker({
      position: { lat: post.latitude, lng: post.longitude },
      map: indexMap,
    });
  });
};

document.addEventListener("turbo:load", () => {
  if (typeof google !== "undefined" && typeof google.maps !== "undefined") {
    initIndexMap();
  }
});
