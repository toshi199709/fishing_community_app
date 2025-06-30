// ✅ 投稿一覧ページの地図表示（ホバーで画像プレビュー表示）
let indexMap;

window.initIndexMap = function () {
  const mapElement = document.getElementById("index-map");
  if (!mapElement) return;

  indexMap = new google.maps.Map(mapElement, {
    center: { lat: 35.681236, lng: 139.767125 },
    zoom: 5,
  });

  const posts = JSON.parse(mapElement.dataset.posts);

  posts.forEach((post) => {
    if (!post.latitude || !post.longitude) return;

    const marker = new google.maps.Marker({
      position: { lat: post.latitude, lng: post.longitude },
      map: indexMap,
    });

    // ✅ InfoWindow に画像を埋め込む
    const infoWindow = new google.maps.InfoWindow({
      content: `<img src="${post.image_url}" alt="釣果画像" style="width: 120px; height: auto;">` // 画像を表示
    });

    // ✅ マウスホバー時に表示、離れたら非表示
    marker.addListener("mouseover", () => {
      infoWindow.open(indexMap, marker);
    });
    marker.addListener("mouseout", () => {
      infoWindow.close();
    });
  });
};

// ✅ Turboページ遷移対応
document.addEventListener("turbo:load", () => {
  if (typeof google !== "undefined" && typeof google.maps !== "undefined") {
    initIndexMap();
  }
});
