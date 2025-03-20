/*!
 * temp-tools.js
 *
 * Purpose: A helper library for creating markers and other map elements
 *          for the Monomaps project using Leaflet.
 *
 * Notice:  This is for development purposes only. Do not include this file
 *          in the production version of Monomaps. Ensure this is added to
 *          your .gitignore file.
 *
 * Developed for Monomaps via Leaflet
 * Created by Jet0751
 * Version: 1.0.0
 */

document.addEventListener("DOMContentLoaded", () => {
  // Ensure the "mmTempTools" setting exists in localStorage
  const tempToolsEnabled = localStorage.getItem("mmTempTools") === 'true';

  // Add menu item for Temp Tools if enabled
  if (tempToolsEnabled) {
    const menuFeatures = document.getElementById("menu-feats");
    const newMenuItem = document.createElement("li");
    newMenuItem.classList.add("menu-item");
    newMenuItem.innerHTML = `<i class="fa fa-code"></i><span>temp-tools</span>`;
    menuFeatures.appendChild(newMenuItem);
  }

  // Handle keydown events
  document.addEventListener("keydown", handleKeydown);
  });

/**
 * Handle keyboard shortcuts
 * @param {KeyboardEvent} event - The keyboard event
 */
function handleKeydown(event) {
  if (event.altKey && event.code === "KeyC") {
    copyCoordinatesToClipboard();
  } else if (event.altKey && event.code === "Slash") {
    displayKeyCombinations();
  }
}

/**
 * Copy coordinates to clipboard
 */
function copyCoordinatesToClipboard() {
  if (typeof coordinates === 'undefined') {
    console.warn("Coordinates variable is not defined.");
    return;
  }

  navigator.clipboard.writeText(coordinates)
    .then(() => {
      mNotify("Copied Coordinates to Clipboard", "success");
    })
    .catch(err => {
      mNotify("Error copying coordinates. Check the console.", "danger");
      console.error("Failed to copy coordinates: ", err);
    });
}

/**
 * Display key combinations in the console
 */
function displayKeyCombinations() {
  mNotify("Printed key combinations in console.");
  
  console.log("%cKey Combinations for Temp Tools", "background: #4287f5; color: black; font-size: 24px;");
  console.log("%c ALT + / %c\nDisplays this message in console. :)", "background: white; color: black; font-size: 12px;", "color: yellow;");
  console.log("%c ALT + C %c\nCopies the coordinates of the current mouse position to the clipboard.", "background: white; color: black; font-size: 12px;", "color: yellow;");
  console.log("%c----", "background: #4287f5; color: black; font-size: 24px;");
  console.log("%cCommands", "background: #4287f5; color: black; font-size: 24px;");
  console.log("%c Run the commands exactly as shown to use them.", "background: white; color: black; font-size: 12px;");
  console.log("%c WARNING: Do not run scripts or commands from untrusted sources!", "background: red; color: white; font-size: 12px;");
  console.log("%c tt.ui(boolean); %c\nEnables or disables the temp-tools UI button. Pass true or false.", "background: white; color: black; font-size: 12px;", "color: yellow;");
  console.log("%c----", "background: #4287f5; color: black; font-size: 24px;");
}

/**
 * Temp Tools UI control
 * @param {boolean} enable - Enable or disable the Temp Tools UI
 */
let tt = {
  ui: function (enable) {
    if (typeof enable !== "boolean") {
      console.error("Invalid input: Please provide a boolean value.");
      return;
    }

    localStorage.setItem("mmTempTools", enable.toString());
    console.log("%c[TempTools]:%cPlease refresh the page for this to take affect.", "color: orange;", "color: white;");
  }
};
