var coordinates;

document.addEventListener("DOMContentLoaded", function () {
  // 1. Define the dimensions of your custom map image
  const imageWidth = 2048;
  const imageHeight = 2048;
  const maxZoom = 4;

  // 2. Calculate map bounds using a temporary map for unprojection
  const southWest = L.point(0, imageHeight);
  const northEast = L.point(imageWidth, 0);
  const tempMap = L.map(document.createElement("div"), { crs: L.CRS.Simple, maxZoom });
  const bounds = L.latLngBounds(
    tempMap.unproject(southWest, maxZoom - 1),
    tempMap.unproject(northEast, maxZoom - 1)
  );
  tempMap.remove();

  // 3. Initialize the main map
  const map = L.map("map", {
    minZoom: 3,
    maxZoom: maxZoom,
    center: [0, 0],        // Adjust as needed
    zoom: 2,               // Adjust as needed
    crs: L.CRS.Simple,
    maxBounds: bounds,
    maxBoundsViscosity: 1.0,
    zoomControl: false
  });

  map.attributionControl.setPrefix(
    'Map Data gathered by Jet - Monomaps by Jet - <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a> - Created with Leaflet'
  );

  L.control.zoom({
    position: "bottomright"
  }).addTo(map);

  const layer1Overlay = L.imageOverlay("/assets/monomaps/backgrounds/layer1.png", bounds);
  const layer2Overlay = L.imageOverlay("/assets/monomaps/backgrounds/layer2.png", bounds);

  const markersLayer1 = L.layerGroup();
  const markersLayer2 = L.layerGroup();


  map.on('mousemove', function (e) {
    coordinates = JSON.stringify({
      lat: e.latlng.lat,
      lng: e.latlng.lng
    }, null, 2); // The 'null, 2' adds pretty-printing for JSON
  });


  // Removes any active layer/marker group before adding the requested one
  function switchLayer(layer) {
    // Remove the existing layers/markers
    map.eachLayer((existingLayer) => {
      // Keep default tileLayer references if any, but remove overlays
      if (existingLayer !== map.tileLayer) {
        map.removeLayer(existingLayer);
      }
    });

    // Add the selected layer
    if (layer === "layer1") {
      map.addLayer(layer1Overlay);
      loadMarkers();
      map.addLayer(markersLayer1);

    } else if (layer === "layer2") {
      map.addLayer(layer2Overlay);
      loadMarkers();
      map.addLayer(markersLayer2);
    }

    const event = new CustomEvent('LayerSwitch', {
      detail: {
        mapLayer: layer
      }
    })

    document.dispatchEvent(event);
  }

  // 8. Set the default layer to Layer 1
  map.addLayer(layer1Overlay);
  loadMarkers();
  map.addLayer(markersLayer1);
  loadMarkers('Layer1');

  // 9. Create a custom control for the layer selector (bottom-left)
  const layerSelector = L.control({ position: "bottomleft" });

  layerSelector.onAdd = function () {
    // Create a container for the selector
    const div = L.DomUtil.create("div", "layer-selector");

    // Insert the HTML structure:
    // - The main (current) layer image
    // - The hidden layer-options that appear on hover
    div.innerHTML = `
      <img src="/assets/monomaps/backgrounds/layer1.png" id="current-layer" title="Current Layer">
      <div class="layer-options">
        <div class="layer-option" id="option-layer1">
          <img src="/assets/monomaps/backgrounds/layer1.png" title="Monoford">
          <span>Monoford</span>
        </div>
        <div class="layer-option" id="option-layer2">
          <img src="/assets/monomaps/backgrounds/layer2.png" title="Pine County">
          <span>Pine County</span>
        </div>
      </div>
    `;

    // Prevent map panning/zooming when clicking inside the control
    L.DomEvent.disableClickPropagation(div);

    // Event listener for "Monoford" (Layer 1)
    div.querySelector("#option-layer1").addEventListener("click", () => {
      switchLayer("layer1");
      document.querySelector("#current-layer").src = "/assets/monomaps/backgrounds/layer1.png";
    });

    // Event listener for "Pine County" (Layer 2)
    div.querySelector("#option-layer2").addEventListener("click", () => {
      switchLayer("layer2");
      document.querySelector("#current-layer").src = "/assets/monomaps/backgrounds/layer2.png";
    });

    return div;
  };

  // 10. Add the layer selector control to the map
  layerSelector.addTo(map);
  window.map = map;

});
