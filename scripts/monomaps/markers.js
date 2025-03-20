let currentLayer = "layer1";
let markersLayerGroup = L.layerGroup();

function loadMarkers() {
    // Clear existing markers
    markersLayerGroup.clearLayers();

    fetch('/scripts/monomaps/map/markers.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(markerData => {
            fetch('/scripts/monomaps/map/maps.json')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(mapData => {
                    const mapLayer = mapData.find(layer => layer.layer === currentLayer);
                    if (!mapLayer) return;

                    markerData.forEach(category => {
                        category.markers.forEach(marker => {
                            if (marker.map && marker.map.toLowerCase() === currentLayer) {
                                if (typeof marker.position.lat !== 'number' || typeof marker.position.lng !== 'number') {
                                    console.warn(`Invalid marker coordinates for ${marker.name}. Skipping...`);
                                    return;
                                }

                                const latLng = L.latLng(marker.position.lat, marker.position.lng);

                                let iconClass = "fa-solid fa-map-marker-alt";
                                if (marker.icon) {
                                    iconClass = `fa-solid fa-${marker.icon}`;
                                }

                                const iconSize = marker.size || 1;
                                const adjustedIconSize = 12 * iconSize;

                                const customIcon = L.divIcon({
                                    html: `<i class="${iconClass}" style="color: ${marker.color || '#000'}; font-size: ${adjustedIconSize}px;"></i>`,
                                    className: 'custom-fa-icon',
                                    iconSize: [adjustedIconSize, adjustedIconSize],
                                    iconAnchor: [adjustedIconSize / 2, adjustedIconSize / 2]
                                });

                                const markerInstance = L.marker(latLng, { icon: customIcon }).bindPopup(marker.name);
                                markersLayerGroup.addLayer(markerInstance);

                                markerInstance.on('click', function () {
                                    const markerCanvas = document.getElementById('marker-canvas');
                                    const canvasImage = markerCanvas.querySelector('.canvas-image');
                                    const canvasTitle = markerCanvas.querySelector('.canvas-title');
                                    const canvasAddress = markerCanvas.querySelector('.canvas-address');
                                    const canvasDescription = markerCanvas.querySelector('.canvas-description');

                                    // Fill the canvas with marker data
                                    canvasImage.src = marker.image || 'https://via.placeholder.com/300';
                                    canvasTitle.textContent = marker.name;
                                    canvasAddress.textContent = `Lat: ${marker.position.lat}, Lng: ${marker.position.lng}`;
                                    canvasDescription.textContent = marker.rent
                                        ? `Type: ${marker.rent.type}, Price: $${marker.rent.price}`
                                        : 'No additional information available.';

                                    // Slide in the canvas
                                    markerCanvas.classList.add('active');
                                });
                            }
                        });
                    });

                    // Add the markers layer group to the map
                    markersLayerGroup.addTo(map);
                })
                .catch(error => {
                    console.error('Error loading maps:', error);
                });
        })
        .catch(error => {
            console.error('Error loading markers:', error);
        });

    // Close canvas when the close button is clicked
    document.querySelector('.close-canvas').addEventListener('click', function () {
        document.getElementById('marker-canvas').classList.remove('active');
    });
}

// Listen for LayerSwitch event to update the current layer
document.addEventListener("LayerSwitch", function (e) {
    currentLayer = e.detail.mapLayer;
    loadMarkers();
});