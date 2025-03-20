/*!
 * search.js
 *
 * Purpose: This provides functionality to the search feature of Monomaps as well as providing
 *          functions for searching, filtering, saving and viewing history. 
 *
 * Developed for Monomaps via Leaflet
 * Created by Jet0751
 * Version: 1.0.0
 */

const searchField = document.getElementById("search-field");
const searchHistoryContainer = document.querySelector(".search-history-container");
const searchResultsContainer = document.getElementById("search-results");

let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
let markersData = [];

// Fetch markers data once on page load
fetch('/scripts/monomaps/map/markers.json')
  .then(response => response.json())
  .then(data => {
    markersData = data;
  })
  .catch(error => console.error('Error fetching markers data:', error));

searchField.addEventListener("focus", () => {
  searchHistoryContainer.style.display = "block";
  displaySearchHistory();
});

document.addEventListener("click", (e) => {
  if (!document.getElementById("search").contains(e.target)) {
    searchHistoryContainer.style.display = "none";
  }
});

searchField.addEventListener("input", () => {
  const query = searchField.value.trim().toLowerCase();
  if (query) {
    searchMarkers(query);
  } else {
    searchResultsContainer.innerHTML = '';
  }
});

function searchMarkers(query) {
  const results = [];
  markersData.forEach(category => {
    category.markers.forEach(marker => {
      if (marker.name.toLowerCase().includes(query)) {
        results.push(marker);
      }
    });
  });
  displaySearchResults(results.slice(0, 5));
}

function displaySearchResults(results) {
  searchResultsContainer.innerHTML = '';
  results.forEach(result => {
    const li = document.createElement('li');
    li.classList.add('search-history');
    li.innerHTML = `<i class="fa-solid fa-map-marker-alt"></i> <span>${result.name}</span>`;
    li.addEventListener('click', () => {
      // Move the map to the marker and open the canvas
      const latLng = L.latLng(result.position.lat, result.position.lng);
      map.setView(latLng, map.getMaxZoom());

      const markerCanvas = document.getElementById('marker-canvas');
      const canvasImage = markerCanvas.querySelector('.canvas-image');
      const canvasTitle = markerCanvas.querySelector('.canvas-title');
      const canvasAddress = markerCanvas.querySelector('.canvas-address');
      const canvasDescription = markerCanvas.querySelector('.canvas-description');

      // Fill the canvas with marker data
      canvasImage.src = result.image || 'https://via.placeholder.com/300';
      canvasTitle.textContent = result.name;
      canvasAddress.textContent = `Lat: ${result.position.lat}, Lng: ${result.position.lng}`;
      canvasDescription.textContent = result.rent
        ? `Type: ${result.rent.type}, Price: $${result.rent.price}`
        : 'No additional information available.';

      // Slide in the canvas
      markerCanvas.classList.add('active');

      mNotify(`Navigating to ${result.name}`, 'info');
      saveSearchHistory(result.name.toLowerCase());
    });
    searchResultsContainer.appendChild(li);
  });
}

function saveSearchHistory(query) {
  if (!searchHistory.includes(query)) {
    searchHistory.unshift(query);
    if (searchHistory.length > 5) {
      searchHistory.pop();
    }
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  }
  displaySearchHistory();
}

function displaySearchHistory() {
  searchResultsContainer.innerHTML = '';
  searchHistory.forEach(history => {
    const li = document.createElement('li');
    li.classList.add('search-history');
    li.innerHTML = `<i class="fa-solid fa-clock"></i> <span>${history}</span>`;
    li.addEventListener('click', () => {
      searchField.value = history;
      searchMarkers(history);
    });
    searchResultsContainer.appendChild(li);
  });
}