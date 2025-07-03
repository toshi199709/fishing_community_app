window.initGlobe = () => {
  const container = document.getElementById("globe-container");
  if (!container) return;

  const postData = JSON.parse(container.dataset.posts || "[]");

  const globe = Globe()(container)
    // ✅ 高精細なNASAの地球画像（青い地球・雲あり）
    .globeImageUrl("https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg")
    .backgroundColor("#000011")
    .pointsData(postData)
    .pointLat(d => d.lat)
    .pointLng(d => d.lng)
    .pointAltitude(0.03)
    .pointColor(() => "orange")
    .pointRadius(0.4)
    .onPointClick(d => window.location.href = d.url);

  setTimeout(() => {
    const canvas = container.querySelector("canvas");
    if (canvas) {
      canvas.style.display = "block";
    }

    globe.pointOfView({ lat: 30, lng: 135, altitude: 2 }, 0);

    const controls = globe.controls();
    controls.setAzimuthalAngle(0);
    controls.update();
  }, 100);
};

document.addEventListener("turbo:load", () => {
  if (typeof window.initGlobe === "function") {
    window.initGlobe();
  }
});
