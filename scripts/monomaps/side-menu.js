/*!
 * side-menu.js
 *
 * Purpose: Provides the functionality to the Side Menu as well as functions
 *          for managing off-canvas elements.
 *
 * Developed for Monomaps via Leaflet
 * Created by Jet0751
 * Version: 1.0.2 (Updated with Dynamic Map Population and Image Loading Effects)
 */

let menu = document.getElementById("menu");
let menuFeats = document.getElementById("menu-feats");
let menuMap = document.getElementById("menu-map");

// Load maps.json and store the data globally
let mapsData = [];

document.addEventListener("DOMContentLoaded", function() {
    fetch("/scripts/monomaps/map/maps.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            mapsData = data;
            populateMenu("layer1"); // Default to layer1
        })
        .catch((error) => {
            console.error("Error fetching maps.json:", error);
        });
});

// Populate the menu with maps from the selected layer
function populateMenu(layer) {
    menuMap.innerHTML = ""; // Clear existing items

    const layerData = mapsData.find(item => item.layer === layer);
    if (!layerData) return;

    layerData.maps.forEach(mapItem => {
        // Create a list item for each map
        const li = document.createElement("li");
        li.classList.add("menu-item");

        // Image Element
        const img = document.createElement("img");
        const loadingGif = "/assets/loading.gif";
        const errorImage = "/assets/error.png";
        const originalSrc = mapItem.image;

        // Set initial loading GIF
        img.src = loadingGif;
        img.alt = mapItem.name;
        img.style.width = "40px";
        img.style.borderRadius = "4px";

        // Create a new Image object to preload the actual image
        const preloader = new Image();
        preloader.src = originalSrc;

        // If the image loads successfully
        preloader.onload = function() {
            img.src = originalSrc;
        };

        // If the image fails to load
        preloader.onerror = function() {
            img.src = errorImage;
        };

        // Text Element
        const span = document.createElement("span");
        span.textContent = mapItem.name;

        // Append elements to the list item
        li.appendChild(img);
        li.appendChild(span);

        // Append list item to the menuMap container
        menuMap.appendChild(li);
    });
}

// Listen for LayerSwitch event to update the menu accordingly
document.addEventListener("LayerSwitch", function (e) {
    populateMenu(e.detail.mapLayer);
});
