const map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: 0,
    maxZoom: 2
}).setView([1024, 1024], 0);

fetch('markers.json')
    .then(response => response.json())
    .then(data => {
        const [width, height] = data.meta.map_resolution;
        const imageBounds = [[0, 0], [height, width]];
        L.imageOverlay(data.meta.map_image, imageBounds).addTo(map);
        map.fitBounds(imageBounds);
        map.setMaxBounds(imageBounds);
    })
    .catch(error => console.error('Error fetching markers.json:', error));