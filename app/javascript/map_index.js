// ✅ 投稿一覧ページの地図表示（画像だけ表示、クリックで遷移）
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

    // ✅ InfoWindow（画像のみ表示）【修正】
    const infoWindow = new google.maps.InfoWindow({
      content: `
        <div style="text-align: center;">
          <img src="${post.image_url}" alt="釣果画像" style="width: 120px; height: auto; display: block; margin: auto;">
        </div>
      `
    });

    // ✅ ピンにマウスを載せたら画像表示
    marker.addListener("mouseover", () => {
      infoWindow.open(indexMap, marker);
    });
    marker.addListener("mouseout", () => {
      infoWindow.close();
    });

    // ✅ ピンをクリックしたら投稿ページに遷移（新規追加）
    marker.addListener("click", () => {
      window.location.href = `/posts/${post.id}`;
    });
  });
};

document.addEventListener("turbo:load", () => {
  if (typeof google !== "undefined" && typeof google.maps !== "undefined") {
    initIndexMap();
  }
});
