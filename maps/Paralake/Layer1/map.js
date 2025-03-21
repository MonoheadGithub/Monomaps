const map = L.map("map", {
  crs: L.CRS.Simple,
  minZoom: 0,
  maxZoom: 2,
}).setView([1024, 1024], 0);

fetch("markers.json")
  .then((response) => response.json())
  .then((data) => {
    const [width, height] = data.meta.map_resolution;
    const imageBounds = [
      [0, 0],
      [height, width],
    ];
    L.imageOverlay(data.meta.map_image, imageBounds).addTo(map);
    map.fitBounds(imageBounds);
    map.setMaxBounds(imageBounds);

    let iconType = "round";
    let iconSize = 48;

    // Process markers
    data.meta.categories.forEach((category) => {
      console.log(`Fetching markers from (${category.name})`);
      if (category.filter.visible && !category.filter.disabled) {
        if (category.markers.length > 0) {
          category.markers.forEach((marker) => {
            console.log(`-> Loading marker (${marker.name})`);
            L.marker(marker.latlng, {
              icon: L.icon({
                iconUrl: `images/markers/${marker.icon}_${iconType}.png`,
                iconSize: [48, 48],
              }),
            })
              .bindPopup(`<b>${marker.name}</b><br>${marker.description}`)
              .addTo(map);
          });
          console.log("-> ✅ Loaded...")
        } else {
          console.log(`-> ❌ There's no markers for this category.`);
        }
      } else {
        console.log("❌ This Category is filtered or disabled.")
      }
    });
  })
  .catch((error) => console.error("Error fetching markers.json:", error));

map.attributionControl.setPrefix(false);
map.attributionControl.addAttribution(
  'Monomaps: Paralake v1.0.0 - Paralake v5 by Perpheads - <a href="https://monolithservers.com/">Monolith Servers</a> - <a href="https://example.com/contributors" target="_blank">Contributors</a>'
);

// Temporary function to get mouse coordinates and copy clicked coordinates
map.on("mousemove", (event) => {
  const { lat, lng } = event.latlng;
});

map.on("click", (event) => {
  const { lat, lng } = event.latlng;
  const coordinates = `"latlng": [${lat.toFixed(2)}, ${lng.toFixed(2)}]`;
  navigator.clipboard.writeText(coordinates).then(() => {
    console.log(`Copied to clipboard: ${coordinates}`);
  }).catch((err) => {
    console.error("Failed to copy coordinates to clipboard:", err);
  });
});

