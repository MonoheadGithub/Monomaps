/*!
 * context-menu.js
 *
 * Purpose: Functions and Code for creating a custom context-menu.
 * 
 * Dependent: Depends on several Monomap Scripts such as "search", "side-menu", "notify", etc.
 *
 * Developed for Monomaps via Leaflet
 * Created by Jet0751
 * Version: 1.0.0
 */

document.addEventListener("DOMContentLoaded", () => {
    
    var map = document.getElementById("map");
    map.addEventListener("contextmenu", (e) => {
        e.preventDefault();
    })

})