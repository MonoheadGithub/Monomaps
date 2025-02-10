console.warn(
  `%c[Attention]: `,
  "color: white; font-size: 14px",
  `Please be careful about what scripts or codes you paste into the console here.`
);

document.addEventListener('contextmenu', event => event.preventDefault());

let parentContainer = document.querySelector("#monomaps-maps-container");
let maparea = document.querySelector("#monomaps-maps-maparea");
var monomapMarkers = JSON.parse(localStorage.getItem("monomapMarkers"));
var timeMode = localStorage.getItem("timeMode");
var showPreview = localStorage.getItem("showPreview");
var themeMode = localStorage.getItem("themeMode");
var mapMode = localStorage.getItem('mapMode');
var mmtypes = [];


function load_markers() {
  try {
    if (monomapMarkers) {
      mmAlert({
        name: "Monomap Markers",
        message: "Pushing markers from Localstorage to mmData.",
        type: "warning",
      });
      for (e = 0; e < monomapMarkers.length; e++) {
        if(monomapMarkers[e].monomaps_data.map === localStorage.getItem('timeMode')){
          let custID = mmData.find(elem => elem.id === monomapMarkers[e].id);
          if(!custID){
           mmData.push(monomapMarkers[e]);
           mmAlert({
            name: "Monomap Markers",
            message: `Pushed ${monomapMarkers[e].monomaps.name} to mmData.`,
            type: "success",
           });
          }else{
            mmAlert({
              name: "Monomap Markers",
              message: `Skipped ${monomapMarkers[e].monomaps.name}, already exists.`,
              type: "warning",
            });
          }
        }
      }
    }

    let missingMarkerCount = 0;
    for(i = 0; i < monomapMarkers.length; i++){
      if(monomapMarkers[i].monomaps_data.type === 'Custom'){
      if(!monomapMarkers[i].monomaps_data.map){
        missingMarkerCount = missingMarkerCount + 1;
      }else if(monomapMarkers[i].monomaps_data.map === 'Southside'){
        missingMarkerCount = missingMarkerCount + 1;
      }
      }
    }

    if(missingMarkerCount > 0){
      if(localStorage.getItem('dnotif')){
        if(localStorage.getItem("dnotif") === 'disabled'){
          mmAlert({
            name: "Migrate Custom Southside Markers.",
            message: `You have ${missingMarkerCount} custom marker(s) from Southside to migrate here, click <i class="fa-solid fa-user-gear"></i> to resolve.`,
            type: 'info',
            ui: true,
            timeOut: 5000
          })
        }
      }
    }

    mmAlert({
      name: "Monomap Markers",
      message: `Checking for duplicate mmData markers in Localstorage.`,
      type: "warning",
    });
    mmAlert({
      name: "Monomap Markers",
      message: `Ignoring Custom Markers..`,
      type: "info",
    });
    for (i = 0; i < mmData.length; i++) {
      for (o = 0; o < monomapMarkers.length; o++) {
        if (mmData[i].id === monomapMarkers[o].id) {
          if (monomapMarkers[o].monomaps_data.type !== "Custom") {
            mmAlert({
              name: "Monomap Markers",
              message: `Deleted ${monomapMarkers[o].monomaps.name} from Localstorage.`,
              type: "success",
            });
            monomapMarkers.splice(o, 1);
          }
        }
      }
    }

    localStorage.setItem("monomapMarkers", JSON.stringify(monomapMarkers));

    console.groupCollapsed("Loaded Monomap Markers..");
    console.time("loadTime");
    for (i = 0; i < mmData.length; i++) {
      let info = mmData[i].monomaps;
      let data = mmData[i].monomaps_data;
      let parent = document.getElementById("monomaps-maps-maparea");
      let newMarker = document.createElement("i");

      newMarker.className = `${data.marker} fa-solid fa-${data.icon}`;
      newMarker.style.position = data.position;
      newMarker.style.top = data.top + "px";
      newMarker.style.left = data.left + "px";
      newMarker.style.color = data.color ? data.color : "";
      newMarker.style.fontSize = data.iconSize ? data.iconSize + "px" : "32px";
      newMarker.onmouseover = function () {
        newMarker.style.fontSize = data.hoverSize
          ? data.hoverSize + "px"
          : "40px";
      };
      newMarker.onmouseleave = function () {
        newMarker.style.fontSize = data.iconSize
          ? data.iconSize + "px"
          : "32px";
      };
      newMarker.setAttribute("data-x", data.left);
      newMarker.setAttribute("data-y", data.top);
      newMarker.setAttribute("data-name", info.name);
      newMarker.setAttribute("data-perm", data.perm ? data.perm : false);
      newMarker.setAttribute("data-type", data.type);
      newMarker.setAttribute("data-icon", data.icon);
      newMarker.setAttribute("data-color", data.color);
      newMarker.setAttribute(
        "data-context-type",
        data.type === "Custom" ? "Custom" : "Monomaps"
      );
      newMarker.id = mmData[i].id;

      if(typeof data.event === 'function'){
        newMarker.addEventListener('click', data.event);
      }else{
        newMarker.setAttribute('onclick', data.event);
      }

      if (localStorage.getItem("showPreview")) {
        if (localStorage.getItem("showPreview") === "true") {
          if (data.preview) {
            let previewTimeout;

            newMarker.addEventListener("mouseover", (e) => {
              
                previewTimeout = setTimeout(() => {
                parent.insertAdjacentHTML(
                  "beforeend",
                  `
              <div class="monomaps-maps-markerPreview fadein" id='preview'>
              <img class="monomaps-maps-imgPreview" src="${info.image}" onerror='this.src="./assets/monomaps/imgs/noImage.jpg"' alt='${info.name}'>
              <div class="monomaps-maps-previewContainer">
              <h3 class="monomaps-maps-titlePreview"><i class='fa-solid fa-${data.icon}' style="color: ${data.color};"></i> ${info.name}</h3>
              <div id='badges'></div>
              <hr>
              <div class='monomaps-maps-descriptPreview'>${info.description}</div>
              </div>
            </div>
              `
                );

                if(data.badges){
                  for(i = 0; i < data.badges.length; i++){
                    document.getElementById('badges').insertAdjacentHTML('afterbegin', `<span class='badge ${data.badges[i].type}'>${data.badges[i].name}</span>  `)
                  }
                }else{
                    document.getElementById('badges').remove();
                }

                let preview = document.getElementById("preview");
                preview.style.position = "absolute";
                preview.style.top = `${data.top + 25}px`;
                preview.style.left = `${data.left + 25}px`;
              }, 600);

            });

            newMarker.addEventListener("mouseleave", (e) => {
              clearTimeout(previewTimeout);
              if (document.getElementById("preview")) {
                document.getElementById("preview").classList.add("fadeout");
                setTimeout(() => {
                  document.getElementById("preview").remove();
                }, 250);
              }
            });
          }
        }
      }

      if (!data.noLoad || data.noLoad == false) {
        mmAlert({
          name: info.name,
          message: `Loaded successfully`,
          type: "success",
        });
        parent.appendChild(newMarker);
      } else {
        if (localStorage.getItem("unicorns")) {
          if (data.type === "Unicorns") {
            parent.appendChild(newMarker);
          }
        } else {
          mmAlert({ name: info.name, message: `Disabled`, type: "warning" });
        }
      }
    }
    console.timeEnd("loadTime");
    console.groupEnd();
  } catch (e) {
    mmAlert({
      name: "Monomaps",
      message: "Error while loading Map Markers, check console.",
      type: "error",
      ui: true,
    });
    mmAlert({ name: "Monomaps", message: e, type: "error" });
  }
}

function unload_markers(reason) {
  let markers = document.querySelectorAll(".marker");
  
  mmAlert({
    name: "Monomaps - Action",
    message: `Unloaded ${markers.length} markers.`,
    type: "warning",
  });

  mmAlert({ name: "Monomaps - Reason", message: `${reason}`, type: "warning" });
  for (i = 0; i < markers.length; i++) {
    markers[i].remove();
  }
}

function delete_marker(e) {
  let mapID = idCheck(e);
  if (mapID) {
    if (!mapID.perm) {
      mmAlert({
        name: `Deleting ${mapID.name}`,
        message: `You're about to delete <b>${mapID.name}</b>, this action cannot be reversed, are you sure?`,
        type: "warning",
        ui: true,
        dialog: true,
        yesButtonText: `Yes, delete ${mapID.name}`,
        noButtonText: `Nevermind, I wanna keep it.`
      }).then((result) => {
        if (result === true) {
          try {
            mmAlert({
              name: "Monomaps",
              message: `Deleting ${mapID.name}`,
              type: `warning`,
            });
            for (i = 0; i < monomapMarkers.length; i++) {
              if (monomapMarkers[i].id === mapID.id) {
                monomapMarkers.splice(i, 1);
                localStorage.setItem(
                  "monomapMarkers",
                  JSON.stringify(monomapMarkers)
                );
                location.reload();
              }
            }
          } catch (t) {
            mmAlert({
              name: "Monomaps",
              message: `Failed to delete ${mapID.name}`,
              type: `error`,
            });
            console.error(t);
          }
        }
      });  
    } else {
      mmAlert({
        name: "Monomaps",
        message: `Failed to delete ${mapID.name}`,
        type: `error`,
      });
    }
  } else {
    mmAlert({
      name: "Monomaps",
      message: `Failed to delete ${mapID.name}, Invalid ID.`,
      type: `warning`,
      ui: true,
    });
  }
}

function dismissInfoP(e) {
  if (e === 1) {
    mmAlert({
      name: "Are you sure?",
      message: "You have unsaved changes made, this is irreversible.",
      type: "warning",
      ui: true,
      dialog: true,
    }).then((result) => {
      if (result === true) {
        let infoPanel = document.getElementById("infopanel");
        let editorPanel = document.getElementById("infopanelEditor");
        infoPanel.classList.add("slideout");
        if (editorPanel) {
          editorPanel.classList.add("fadeout");
        }
        setTimeout(() => {
          infoPanel.remove();
          if (editorPanel) {
            editorPanel.remove();
          }
        }, 500);
      }
    });
  } else if (e === 1.1) {
    let infoPanel = document.getElementById("infopanel");
    let editorPanel = document.getElementById("infopanelEditor");
    infoPanel.classList.add("slideout");
    if (editorPanel) {
      editorPanel.classList.add("fadeout");
    }
    setTimeout(() => {
      infoPanel.remove();
      if (editorPanel) {
        editorPanel.remove();
      }
    }, 500);
  } else {
    let infoPanel = document.getElementById("infopanel");
    infoPanel.classList.add("slideout");
    setTimeout(() => {
      infoPanel.remove();
    }, 1000);
  }
}

function idCheck(e) {
  let el = mmData.find((obj) => obj.id == e);
  if (el !== undefined) {
    mmAlert({
      name: "idCheck - " + el.monomaps.name,
      message: el,
      type: "info",
    });
    return {
      map: el.monomaps_data.map,
      id: el.id,
      badges: el.monomaps_data.badges ? el.monomaps_data.badges : false,
      type: el.monomaps_data.type,
      perm: el.monomaps_data.perm,
      icon: el.monomaps_data.icon,
      name: el.monomaps.name,
      description: el.monomaps.description,
      image: el.monomaps.image,
      x: el.monomaps_data.left,
      y: el.monomaps_data.top,
      color: el.monomaps_data.color,
      iconSize: el.monomaps_data.iconSize,
      hoverSize: el.monomaps_data.hoverSize,
    };
  } else {
    mmAlert({ name: "idCheck", message: `${e} is invalid.`, type: "error", ui: true });
  }
}

function mapareaSize(amount) {
  if (!amount)
    return mmAlert({
      name: "Monomaps",
      message: `Did not provide value to change map-size to.`,
      type: "error",
      ui: true,
    });

  let maparea = document.querySelector("#monomaps-maps-maparea");

  maparea.style.width = amount + "px";
  maparea.style.height = amount + "px";

  maparea.style.backgroundSize = `${amount}px ${amount}px`;

  mmAlert({
    name: "Monomaps",
    message: `Map-size changed to ${amount}x${amount}.`,
    type: "success",
  });
}

function customMarker(e) {
  let infopanel = document.getElementById("infopanel");
  if (document.body.contains(infopanel)) {
    let mapID = idCheck(e);
    if (mapID) {
      infopanel.dataset.markerid = mapID.id;
      infopanel.innerHTML = `
      <img class='monomaps-maps-infopanel-img lazyload' src='${mapID.image}' onerror='this.src="./assets/monomaps/imgs/noImage.jpg"' alt='${mapID.name}'>
      ${mapID.pano === true ? "" : `<input type='text' id='searchBar' class='monomaps-input' placeholder='${mapID.name}'>`}
      <button class='monomaps-maps-infopanel-dismiss' onclick='dismissInfoP()' id='infoPDismiss'><i class='fa-solid fa-xmark'></i></button>
      <h1 class='monomaps-maps-infopanel-title'><i class='fa-solid fa-${mapID.icon}' style='color: ${mapID.color}'></i> ${mapID.name}</h1>
      <div id='monomaps-maps-infopanel-badges'></div>
      <hr>
      <div class='monomaps-maps-infopanel-description'>${mapID.description}</div>
      <hr>
      <div class='monomaps-maps-infopanel-actions'>
      <a href="#" class='monomaps-maps-button-rounded' onclick='shareMarker(this.parentNode.parentElement.dataset.markerid)'><i class='fa-solid fa-share'></i></a>
      <a href="#" class='monomaps-maps-button-rounded' onclick='reportMarker(this.parentNode.parentElement.dataset.markerid)'><i class='fa-solid fa-flag'></i></a>
      </div>
      `;

      if(mapID.badges){
        for(i = 0; i < mapID.badges.length; i++){
          document.getElementById('monomaps-maps-infopanel-badges').insertAdjacentHTML('afterbegin', `<span class='badge ${mapID.badges[i].type}'>${mapID.badges[i].name}</span>  `)
        }
      }else{
        document.getElementById('monomaps-maps-infopanel-badges').remove();
      }
    }
  } else {
    let mapID = idCheck(e);
    if (mapID) {
      document.body.insertAdjacentHTML("beforeend", `
      <div class='monomaps-maps-infopanel slidein' id='infopanel' data-markerID='${mapID.id}'>
      <img class='monomaps-maps-infopanel-img lazyload' src='${mapID.image}' onerror='this.src="./assets/monomaps/imgs/noImage.jpg"' alt='${mapID.name}'>
      <input type='text' id='searchBar' class='monomaps-input' placeholder='${mapID.name}'>
      <button class='monomaps-maps-infopanel-dismiss' onclick='dismissInfoP()' id='infoPDismiss'><i class='fa-solid fa-xmark'></i></button>
      <h1 class='monomaps-maps-infopanel-title'><i class='fa-solid fa-${mapID.icon}' style='color: ${mapID.color}'></i> ${mapID.name}</h1>
      <div id='monomaps-maps-infopanel-badges'></div>
      <hr>
      <div class='monomaps-maps-infopanel-description'>${mapID.description}</div>
      <hr>
      <div class='monomaps-maps-infopanel-actions'>
      <a href="#" class='monomaps-maps-button-rounded' onclick='shareMarker(this.parentNode.parentElement.dataset.markerid)'><i class='fa-solid fa-share'></i></a>
      <a href="#" class='monomaps-maps-button-rounded' onclick='reportMarker(this.parentNode.parentElement.dataset.markerid)'><i class='fa-solid fa-flag'></i></a>
      </div>
      </div>
      `
      );

      if(mapID.badges){
        for(i = 0; i < mapID.badges.length; i++){
          document.getElementById('monomaps-maps-infopanel-badges').insertAdjacentHTML('afterbegin', `<span class='badge ${mapID.badges[i].type}'>${mapID.badges[i].name}</span>  `)
        }
      }else{
        document.getElementById('monomaps-maps-infopanel-badges').remove();
      }
    }
  }

  document.getElementById("searchBar").addEventListener("keyup", (e) => {
    listMarkers(document.getElementById("searchBar").value);
  });
}

function listMarkers(term) {
  let infop = document.getElementById("infopanel");
  if (document.body.contains(infop)) {
    infop.innerHTML = `
    <input type='text' id='searchBar' class='monomaps-input' placeholder='Search Markers'>
    <button class='monomaps-maps-infopanel-dismiss' onclick='dismissInfoP()' id='infoPDismiss'>X</button>
    <div class='monomaps-maps-infopanel-description' style='margin-top: 65px; max-height: 90% !important;'>
    <hr>
    <ul id='markers' style='list-style-type: none; padding: 0; margin: 0;'>
    </div>
    `;
  } else {
    document.body.insertAdjacentHTML(
      "beforeend",
      `
      <div class='monomaps-maps-infopanel slidein' id='infopanel'>
      <input type='text' id='searchBar' class='monomaps-input' placeholder='Search Markers'>
      <button class='monomaps-maps-infopanel-dismiss' onclick='dismissInfoP()' id='infoPDismiss'><i class='fa-solid fa-xmark'></i></button>
      <div class='monomaps-maps-infopanel-description' style='margin-top: 65px; max-height: 90% !important;'>
      <hr>
      <div>
      <ul id='markers' style='list-style-type: none; padding: 0; margin: 0;'>
      </ul>
      </div>
      </div>
      </div>
      `
    );
  }

  for (i = 0; i < mmData.length; i++) {
    if (!mmData[i].monomaps_data.noLoad === true) {
      let mmInfo = mmData[i].monomaps;
      let mmInfoData = mmData[i].monomaps_data;

      let markerHTML = document.createElement("li");
      markerHTML.innerHTML = `
      <div class='listMarkers hidden' onclick='customMarker(${mmData[i].id})'>
      <b class='configTitle'><a href="#" style='text-decoration: none; color: white;'><i class='fa-solid fa-${mmInfoData.icon}' style='color: ${mmInfoData.color};'></i> ${mmInfo.name}</a></b>
      </div>
      `;

      markerHTML.dataset.id = mmData[i].id;
      markerHTML.dataset.name = mmInfo.name;

      markerHTML.addEventListener("click", () => {
        document
          .getElementById(markerHTML.dataset.id)
          .scrollIntoView({ block: "center", inline: "center" });
      });

      document.getElementById("markers").appendChild(markerHTML);
    }
  }

  let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  const hiddenElems = document.querySelectorAll(".hidden");
  hiddenElems.forEach((el) => observer.observe(el));

  let listMarkers = document.getElementsByClassName("listMarkers");
  document.getElementById("searchBar").addEventListener("keyup", () => {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("searchBar");
    filter = input.value.toUpperCase();
    ul = document.getElementById("markers");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < listMarkers.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].classList.remove("hideElem");
      } else {
        li[i].classList.add("hideElem");
      }
    }
  });

  document.getElementById("searchBar").focus();
  document.getElementById("searchBar").value = term ? term : "";
}

function shareMarker(x) {
  navigator.clipboard.writeText(
    `${window.location.host}${window.location.pathname}?marker=${x}`
  );
  mmAlert({
    name: "Monomaps",
    message: `Copied ${window.location.host}${window.location.pathname}?marker=${x}.`,
    type: "success",
    ui: true,
  });
}

function editMarker(e) {
  let mapID = idCheck(e);
  if (mapID) {
    if (!mapID.perm) {
      let infoPanel = document.getElementById("infopanel");
      let settingsPanel = document.getElementById("monomaps-config-panel");
      let settingsBackdrop = document.getElementById("monomaps-config-panel-backdrop");
      if (infoPanel) {
        dismissInfoP();
      }
      if (settingsPanel) {
        settingsPanel.remove();
        settingsBackdrop.remove();
      }
      document.body.insertAdjacentHTML(
        "beforeend",
        `
      <div class='monomaps-maps-infopanel fadein' id='infopanel'>
      <img class='monomaps-maps-infopanel-img' id='img' src='${mapID.image}' onerror='this.src="./assets/monomaps/imgs/noImage.jpg"' alt='${mapID.name}'>
      <h1 class='monomaps-maps-infopanel-title'><span id='icon'><i class='fa-solid fa-${mapID.icon}' style='color: ${mapID.color}'></i></span> <span id='title'>${mapID.name}</span></h1>
      <div class='monomaps-maps-infopanel-description' id='descript'>${mapID.description}</div>
      <span class='markerInfo' id='mId'>${mapID.id} | Monomaps Editor Preview</span>
      </div>

      <div class='monomaps-maps-infopanel-editor fadein' id='infopanelEditor'>
      <div class='monomaps-maps-infopanel-container'>
      <h1 class='monomaps-maps-infopanel-editor-title'>Editing <i class='fa-solid fa-${mapID.icon}' style='color: ${mapID.color}'></i> ${mapID.name}</h1>
      <hr><br>
      <div class='settingsContainer'>
      <div>
      <label for='imageUrl'>Image URL<br>
      <input type='text' value='${mapID.image}' id='imageUrl' class='monomaps-input' placeholder='${window.location.host}/assets/imgs/noImage.jpg'>
      </label>
      </div>
      <div>
      <label for='markerName' required>Marker Name <span class='badge badge-red'>Required</span><br>
      <input type='text' value='${mapID.name}' id='markerName' class='monomaps-input' placeholder='Example Marker'>
      </label>
      </div>
      <div>
      <label for='markerIcon'>Marker Icon <span class='badge badge-red'>Required</span><br>
      <input type='text' value='${mapID.icon}' id='markerIcon' class='monomaps-input' placeholder='question'>
      </label>
      </div>
      <div>
      <label for='markerDescription' required>Description <span class='badge badge-red'>Required</span><br>
      <textarea id='markerDescription' class='monomaps-input' placeholder='Information about the marker goes here.'>${mapID.description}</textarea>
      </label>
      </div>      
      <div>
      <label for='markerColor'>Color<br>
      <input type='color' value='${mapID.color}' id='markerColor' class='monomaps-input'>
      </label>
      </div>
      <div>
      <label for='markerXY'>Marker Data<br>
      X<input type='text' value='${mapID.x}' id='markerX' class='monomaps-input'><br>
      Y<input type='text' value='${mapID.y}' id='markerY' class='monomaps-input'><br>
      <a href="#" class='monomaps-maps-button-rounded' id='changePosition'><i class='fa-solid fa-up-down-left-right'></i> Change position</a>
      </label>
      </div>
      </div>
      <div>
      <a class='monomaps-maps-button-rounded' id='submit' onclick='saveMarker("${mapID.id}")')><i class='fa-solid fa-save'></i> Save Changes</a> <a class='monomaps-maps-button-rounded-caution' onclick='dismissInfoP(1)'><i class='fa-solid fa-x'></i> Cancel Changes</a>
      </div>
      </div>
      </div>
      `
      );

      document.getElementById("imageUrl").addEventListener("keyup", (e) => {
        document.getElementById("img").src =
          document.getElementById("imageUrl").value;
      });

      document.getElementById("markerName").addEventListener("keyup", (e) => {
        document.getElementById("title").innerText =
          document.getElementById("markerName").value;
      });
      document.getElementById("markerColor").addEventListener("change", (e) => {
        document.getElementById("icon").style.color =
          document.getElementById("markerColor").value;
      });
    
      document.getElementById("markerIcon").addEventListener("keyup", (e) => {
        document.getElementById("icon").innerHTML = `<i class='fa-solid fa-${
          document.getElementById("markerIcon").value
        }'></i>`;
      });

      document
        .getElementById("markerDescription")
        .addEventListener("keyup", (e) => {
          document.getElementById("descript").innerHTML =
            document.getElementById("markerDescription").value;
        });

        document.getElementById('changePosition')
        .addEventListener("click", (e) => {
          let x;
          let y;

          mmAlert({ 
            name: mapID.name,
            message: `Choosing position, <b>Click here to cancel</b>.`,
            type: 'info',
            ui: true,
            timeOut: 3600000,
            id: 'EditMode',
            onclick: function() {
              document.getElementById('monomaps-maps-maparea').removeEventListener('click', mapClick)
              document.getElementById('infopanel').style.display = 'block';
              document.getElementById('infopanelEditor').style.display = 'block';  
              this.remove();  
            }
          })

          document.getElementById('infopanel').style.display = 'none';
          document.getElementById('infopanelEditor').style.display = 'none';

          function mapClick() {
            x = posX;
            y = posY;

            mmAlert({ 
              name: mapID.name,
              message: `Selected X:${x}, Y: ${y}`,
              type: 'info',
              ui: true
            })

            document.getElementById('infopanel').style.display = 'block';
            document.getElementById('infopanelEditor').style.display = 'block';  

            document.getElementById('markerX').value = x;
            document.getElementById('markerY').value = y;

            document.getElementById('EditMode').remove();
            document.getElementById('monomaps-maps-maparea').removeEventListener('click', mapClick)
          }

          document.getElementById('monomaps-maps-maparea').addEventListener('click', mapClick);
        })

    } else {
      console.log(
        `%c[Monomaps Error]: `,
        "color: red;",
        "Cannot edit permanent markers."
      );
    }
  }
}

async function removeDefaults(id) {
  let mapID = idCheck(id);

  try {

    mmAlert({
      name: "Removed Default Map",
      message: `removed default map for ${mapID.name}`,
      type: "info",
      ui: true,
    });
  
    let edited = {
      id: id,
      monomaps: {
        name: mapID.name,
        description: mapID.description,
        image: mapID.image,
      },
      monomaps_data: {
        map: "",
        iconSize: mapID.iconSize,
        hoverSize: mapID.hoverSize,
        preview: true,
        type: "Custom",
        position: "absolute",
        top: mapID.y,
        left: mapID.x,
        icon: mapID.icon,
        marker: "marker",
        color: mapID.color,
        event: 'customMarker(this.id)'
      },
    };
  
    for (let [i, marker] of monomapMarkers.entries()) {
      if (marker.id == id) {
        monomapMarkers.splice(i, 1);
        monomapMarkers.push(edited);
        localStorage.setItem("monomapMarkers", JSON.stringify(monomapMarkers));
      }
    }
  }catch (e){
    mmAlert({
      name: "Error",
      message: e,
      type: "error",
      ui: true,
    });
  }
}

async function saveMarker(id) {
  let mapID = idCheck(id);

  mmAlert({
    name: "Monomaps",
    message: `Saving ID ${id}`,
    type: "info",
    ui: true,
  });

  let image = document.getElementById("imageUrl").value;
  let markerName = document.getElementById("markerName").value;
  let markerIcon = document.getElementById("markerIcon").value;
  let markerDescription = document.getElementById("markerDescription").value;
  let markerColor = document.getElementById("markerColor").value;
  let markerX = document.getElementById('markerX').value;
  let markerY = document.getElementById('markerY').value;

  if (!markerName || markerName.length <= 0) {
    markerName = "No Name Provided";
  }

  if (!markerIcon || markerIcon.length <= 0) {
    markerIcon = "question";
  }

  if (!markerDescription || markerDescription.length <= 0) {
    markerDescription = "No Description Provided";
  }

  let edited = {
    id: id,
    monomaps: {
      name: markerName,
      description: markerDescription,
      image: image,
    },
    monomaps_data: {
      map: localStorage.getItem("timeMode"),
      iconSize: 32,
      hoverSize: 40,
      preview: true,
      type: "Custom",
      position: "absolute",
      top: markerY,
      left: markerX,
      icon: markerIcon,
      marker: "marker",
      color: markerColor,
      event: 'customMarker(this.id)'
    },
  };

  for (let [i, marker] of monomapMarkers.entries()) {
    if (marker.id == id) {
      monomapMarkers.splice(i, 1);
      monomapMarkers.push(edited);
      localStorage.setItem("monomapMarkers", JSON.stringify(monomapMarkers));
    }
  }

  window.history.replaceState({}, document.title, "/?intoView=" + id);
  location.reload();
}

var posX;
var posY;
let container = document.getElementById("monomaps-maps-maparea");

var coordinatesListener = function (e) {
  posX = e.offsetX;
  posY = e.offsetY;
  document.getElementById("posX").innerText = posX;
  document.getElementById("posY").innerText = posY;
};

const contextMenu = document.getElementById('contextMenu');
const scope = document.querySelector('#monomaps-maps-container');

scope.addEventListener('contextmenu', async (event) => {
  event.preventDefault();

  const { clientX: mouseX, clientY: mouseY } = event;

  const { normalizedX, normalizedY } = await normalizePosition(mouseX, mouseY);

  contextMenu.style.top = `${normalizedY}px`;
  contextMenu.style.left = `${normalizedX}px`;

  contextMenu.classList.remove("visible");

  setTimeout(() => {
   contextMenu.classList.add("visible"); 
  });

  contextMenu.innerHTML = '';

  if (event.target.dataset.contextType === "Monomaps") {
    contextMenu.innerHTML = `
    <div class="context-item-text">${event.target.dataset.name}</div>
    <hr>
    <div class='context-item' onclick='copyCoordinates(${event.target.dataset.x}, ${event.target.dataset.y})'><i class='fa-solid fa-copy'></i> Copy Coordinates</div>
    <div class="context-item" onclick='shareMarker(${event.target.id})'><i class='fa-solid fa-share'></i> Share Marker</div>
    `;
  } else if (event.target.dataset.contextType === "Maparea") {
    contextMenu.innerHTML = `
    <div class="context-item-text">Monomaps</div>
    <hr>
    <div class='context-item' onclick='copyCoordinates(${posX}, ${posY})'><i class='fa-solid fa-copy'></i> Copy Coordinates</div>
    `;
  } else if (event.target.dataset.contextType === "Custom") {
    contextMenu.innerHTML = `
    <div class="context-item-text">${event.target.dataset.name}</div>
    <hr>
    <div class='context-item' onclick='copyCoordinates(${event.target.dataset.x}, ${event.target.dataset.y})'><i class='fa-solid fa-copy'></i> Copy Coordinates</div>
    <div class="context-item" onclick='editMarker(${event.target.id})'><i class='fa-solid fa-pencil'></i> Edit this Marker</div>
    <div class="context-item contextWarning" onclick='delete_marker(${event.target.id})'><i class='fa-solid fa-trash-xmark'></i> Delete this Marker</div>
  `;
  //     <div class="context-item" onclick='markerExport(${event.target.id})'><i class='fa-solid fa-file-export'></i> Export Marker Data</div>
  }
})

scope.addEventListener('click', (e) => {
  if(e.target.offsetParent != contextMenu){
    contextMenu.classList.remove('visible');
  }else{
    contextMenu.classList.remove('visible');
  }
})

const normalizePosition = async (mouseX, mouseY) => {
  const {
    left: scopeOffsetX,
    top: scopeOffsetY,
  } = scope.getBoundingClientRect();

  const scopeX = mouseX - scopeOffsetX;
  const scopeY = mouseY - scopeOffsetY;

  const outOfBoundsOnX = scopeX + contextMenu.clientWidth > scope.clientWidth;
  const outOfBoundsOnY = scopeY + contextMenu.clientHeight > scope.clientHeight;

  let normalizedX = mouseX;
  let normalizedY = mouseY;

  if (outOfBoundsOnX) {
    normalizedX = scopeOffsetX + scope.clientWidth - contextMenu.clientWidth;
  }

  if (outOfBoundsOnY) {
    normalizedY = scopeOffsetY + scope.clientHeight - contextMenu.clientHeight;
  }

  return { normalizedX, normalizedY };
}

function copyCoordinates(x,y){
  navigator.clipboard.writeText(`x:${x}, y:${y}`);
  mmAlert({
    name: "Monomaps",
    message: `Copied x:${x}, y:${y} to clipboard.`,
    type: "success",
    ui: true,
  });
}

function reportMarker(id, type) {
  let mapID = idCheck(id);
  let body = `
  %5BHEADING%3D2%5D%5BB%5DMarker%20Information%5B%2FB%5D%5B%2FHEADING%5D%0A%5BLIST%5D%0A%5B%2A%5D%5BB%5DID%3A%20%5B%2FB%5D${id}%0A%5B%2A%5D%5BB%5DName%3A%20%5B%2FB%5D${mapID.name}%0A%5B%2A%5D%5BB%5DPosition%3A%20%5B%2FB%5D${mapID.x}%2C%20${mapID.y}%0A%5B%2A%5D%5BB%5DMonomaps%20Version%3A%20%5B%2FB%5D${localStorage.getItem('introConfirm')}%0A%5B%2FLIST%5D%0A%5BHEADING%3D2%5D%5BB%5DInformation%5B%2FB%5D%5B%2FHEADING%5D%0A%5BLIST%5D%0A%5B%2A%5D%5BB%5DWhy%20are%20you%20reporting%20this%20marker%20for%3A%5B%2FB%5D%0A%5B%2A%5D%5BB%5DDiscord%20Name%3A%20%5B%2FB%5D%0A%5B%2A%5D%5BB%5DCan%20Monomaps%20contact%20you%20for%20more%20information%20if%20needed%20on%20Discord%3F%20%5B%20Y%20%2F%20N%20%5D%3A%20%5B%2FB%5D%0A%5B%2FLIST%5D
  `
  window.open(`https://monolithservers.com/forums/conversations/add?to=Jet&title=Reporting ${mapID.name} on Monomaps&message=${body}`, "_blank")  
}

function reportCoordinates(x, y) {
  let body = `
  %5BHEADING%3D2%5D%5BB%5DCoordinates%20Information%5B%2FB%5D%5B%2FHEADING%5D%0A%5BLIST%5D%0A%5B%2A%5D%5BB%5DPosition%3A%20%5B${x}, ${y}%2FB%5D%0A%5B%2A%5D%5BB%5DMonomaps%20Version%3A%20%5B%2FB%5D${localStorage.getItem("introConfirmed")}%0A%5B%2FLIST%5D%0A%5BHEADING%3D2%5D%5BB%5DInformation%5B%2FB%5D%5B%2FHEADING%5D%0A%5BLIST%5D%0A%5B%2A%5D%5BB%5DWhy%20are%20you%20reporting%20these%20coordinates%20for%3A%5B%2FB%5D%0A%5B%2A%5D%5BB%5DDiscord%20Name%3A%20%5B%2FB%5D%0A%5B%2A%5D%5BB%5DCan%20Monomaps%20contact%20you%20for%20more%20information%20if%20needed%20on%20Discord%3F%20%5B%20Y%20%2F%20N%20%5D%3A%20%5B%2FB%5D%0A%5B%2FLIST%5D
  `
  
  window.open(`https://monolithservers.com/forums/conversations/add?to=Jet&title=Reporting Coordinates on Monomaps&message=${body}`, "_blank")  
}

container.addEventListener("mousemove", coordinatesListener, false);

function markerExport(target) {
  
}

function importcm(data) {

}

let development = {
  mia: function(id) {
    let mapID = idCheck(id);
    
    let edited = {
      id: mapID.id,
      monomaps: {
        name: mapID.name,
        description: mapID.description,
        image: mapID.image,
      },
      monomaps_data: {
        map: '',
        iconSize: mapID.iconSize,
        hoverSize: mapID.hoverSize,
        preview: true,
        type: "Custom",
        position: "absolute",
        top: mapID.y,
        left: mapID.x,
        icon: mapID.icon,
        marker: "marker",
        color: mapID.color,
        event: 'customMarker(this.id)'
      },
    };
  
    for (let [i, marker] of monomapMarkers.entries()) {
      if (marker.id == id) {
        monomapMarkers.splice(i, 1);
        monomapMarkers.push(edited);
        localStorage.setItem("monomapMarkers", JSON.stringify(monomapMarkers));
      }
    }

    window.location.reload();
  }
}

function addCustomMarker(x, y) {
  let infoPanel = document.getElementById("infopanel");
  if (infoPanel) {
    dismissInfoP();
  }
  let id = Math.floor(Math.random() * 100000000);

  document.body.insertAdjacentHTML(
    "beforeend",
    `
      <div class='monomaps-maps-infopanel slidein' id='infopanel'>
      <img class='monomaps-maps-infopanel-img' id='img' src='' onerror='this.src="./assets/monomaps/imgs/noImage.jpg"' alt='map editor image'>
      <h1 class='monomaps-maps-infopanel-title'><span id='icon'><i class='fa-solid fa-question' style='color: white'></i></span> <span id='title'>Example Marker</span></h1>
      <div class='monomaps-maps-infopanel-description' id='descript'>Information about the marker goes here.</div>
      <span class='markerInfo' id='mId'>${id} | Monomaps Editor Preview</span>
      </div>

      <div class='monomaps-maps-infopanel-editor fadein' id='infopanelEditor'>
      <div class='monomaps-maps-infopanel-container'>
      <h1 class='monomaps-maps-infopanel-editor-title'>Creating a new marker</h1>
      <hr><br>
      <div class='settingsContainer' id='inputFields'>
      <div>
      <label for='imageUrl'>Image URL<br>
      <input type='text' value='' id='imageUrl' class='monomaps-input' placeholder='${window.location.host}/assets/imgs/noImage.jpg'>
      </label>
      </div>
      <div>
      <label for='markerName'>Marker Name <span class='badge badge-red'>Required</span><br>
      <input type='text' value='' id='markerName' class='monomaps-input' placeholder='Example Marker'>
      </label>
      </div>
      <div>
      <label for='markerIcon'>Marker Icon <span class='badge badge-red'>Required</span><br>
      <input type='text' value='' id='markerIcon' class='monomaps-input' placeholder='question'>
      </label>
      </div>
      <div>
      <label for='markerDescription'>Description <span class='badge badge-red'>Required</span><br>
      <textarea id='markerDescription' class='monomaps-input' placeholder='Information about the marker goes here.'></textarea>
      </label>
      </div>      
      <div>
      <label for='markerColor'>Color<br>
      <input type='color' value='#ffffff' id='markerColor' class='monomaps-input'>
      </label>
      </div>
      </div>
      <div>
      <a class='monomaps-maps-button-rounded-success' id='submit'><i class='fa-solid fa-save'></i> Save & Create Marker</a>
      
      <a class='monomaps-maps-button-rounded-caution' onclick='dismissInfoP(1)'><i class='fa-solid fa-x'></i> Cancel Changes</a>
      </div>
      </div>
      </div>
      `
  );

  document.getElementById("submit").addEventListener("click", (e) => {
    let image = document.getElementById("imageUrl").value;
    let markerName = document.getElementById("markerName").value;
    let markerIcon = document.getElementById("markerIcon").value;
    let markerDescription = document.getElementById("markerDescription").value;
    let markerColor = document.getElementById("markerColor").value;

    if (!markerName || markerName.length <= 0) {
      markerName = "No Name Provided";
    }

    if (!markerIcon || markerIcon.length <= 0) {
      markerIcon = "question";
    }

    if (!markerDescription || markerDescription.length <= 0) {
      markerDescription = "No Description Provided";
    }

    if (monomapMarkers) {
      for (i = 0; i < mmData.length; i++) {
        if (mmData[i].id === id) {
          mmAlert({
            name: "Monomaps Creator",
            message: `Marker already exists.`,
            type: "error",
            ui: true,
          });
        } else {
          let newMarker = {
            id: id,
            monomaps: {
              name: markerName,
              description: markerDescription,
              image: image,
            },
            monomaps_data: {
              map: localStorage.getItem("timeMode"),
              iconSize: 32,
              hoverSize: 40,
              preview: true,
              type: "Custom",
              position: "absolute",
              top: y - 10,
              left: x - 10,
              icon: markerIcon,
              marker: "marker",
              color: markerColor,
              event: 'customMarker(this.id)'
            },
          };

          monomapMarkers.push(newMarker);
          break;
        }
      }
    }

    window.history.replaceState({}, document.title, "/?intoView=" + id);
    localStorage.setItem("monomapMarkers", JSON.stringify(monomapMarkers));
    window.location.reload();
  });

  document.getElementById("imageUrl").addEventListener("keyup", (e) => {
    document.getElementById("img").src =
      document.getElementById("imageUrl").value;
  });

  document.getElementById("markerName").addEventListener("keyup", (e) => {
    document.getElementById("title").innerText =
      document.getElementById("markerName").value;
  });

  document.getElementById("markerColor").addEventListener("change", (e) => {
    document.getElementById("icon").style.color =
      document.getElementById("markerColor").value;
  });

  document.getElementById("markerIcon").addEventListener("keyup", (e) => {
    document.getElementById("icon").innerHTML = `<i class='fa-solid fa-${
      document.getElementById("markerIcon").value
    }'></i>`;
  });

  document
    .getElementById("markerDescription")
    .addEventListener("keyup", (e) => {
      document.getElementById("descript").innerHTML =
        document.getElementById("markerDescription").value;
    });
}

function copyJson(n) {
  mmAlert({
    name: "Deprecation Warning",
    message: `This feature has been deprecated and will be removed in next Major Update.`,
    type: "error",
    ui: true,
  });

  try {
    for (i = 0; i < monomapMarkers.length; i++) {
      if (monomapMarkers[i].id === n) {
        var json = JSON.stringify(monomapMarkers[i]);
        navigator.clipboard.writeText(json);
        mmAlert({
          name: "Monomaps",
          message: `Copied ${monomapMarkers[i].monomaps.name} JSON.`,
          type: "success",
          ui: true,
        });
      }
    }
  } catch (e) {
    mmAlert({
      name: "Monomaps",
      message: `Couldn't copy marker JSON.`,
      type: "error",
      ui: true,
    });
    console.error(e.message);
  }
}

/** Hides map-markers. */
function hide(type) {
  if (type.startsWith("!")) {
    reloadMarkers();
    let markers = document.querySelectorAll(".marker");

    for (i = 0; i < markers.length; i++) {
      if (markers[i].dataset.type !== type.replace("!", "")) {
        markers[i].style.display = "none";
      }
    }
  } else if (type.startsWith("*")) {
    let markers = document.querySelectorAll(".marker");

    for (i = 0; i < markers.length; i++) {
      if (markers[i].id !== type.replace("*", "")) {
        markers[i].style.display = "none";
      }
    }
  } else {
    let mType = document.querySelectorAll(`[data-type="${type}"]`);
    for (i = 0; i < mType.length; i++) {
      mType[i].style.display = "none";
    }
  }
}

/** Reloads the map-markers. */
function reloadMarkers() {
  unload_markers("Reloading");
  load_markers();
  window.history.replaceState({}, document.title, "/");
}

function GreatMillenniumMine() {

  let backdrop = document.createElement("div");
  let newConfiguration = document.createElement("div");
  newConfiguration.classList.add("monomaps-container-template");
  newConfiguration.id = "monomaps-mine1-panel"

  newConfiguration.innerHTML = `
  <div class='monomaps-ui-header'><h2>Great Millennium Mines</h2></div>
  <div class='monomaps-ui-sidebar-right'></div>
  <div class='monomaps-ui-container dragscroll'>
  <div class='monomaps-mine1-container' id='monomaps-mine1-container'></div>
  </div>
  `


  backdrop.classList.add("monomaps-maps-notification-alert-background");
  backdrop.id = 'monomaps-mine1-panel-backdrop'
  backdrop.addEventListener("click", (e) => {
    backdrop.remove();
    newConfiguration.remove();
    parentContainer.classList.add("dragscroll");
    dragscroll.reset();
  });

  parentContainer.appendChild(backdrop);
  parentContainer.appendChild(newConfiguration);

  parentContainer.classList.remove("dragscroll");

  dragscroll.reset();

  mmAlert({
    name: "Monomaps - GMM",
    message: "Loading map-markers for GMM",
    type: "warning"
  })

  let uiParentContainer = document.querySelector("#monomaps-mine1-container");

  for(i = 0; i < gmmData.length; i++){
    let newUiMarker = document.createElement("i");
    let info = gmmData[i].info;
    let data = gmmData[i].data;

    newUiMarker.id = gmmData[i].id;
    newUiMarker.classList.add("marker", "fa-solid", `fa-${gmmData[i].data.icon}`);
    newUiMarker.style.color = gmmData[i].data.color;

    newUiMarker.style.position = gmmData[i].data.position;
    newUiMarker.style.top = gmmData[i].data.top + 'px';
    newUiMarker.style.left = gmmData[i].data.left + 'px';

    newUiMarker.style.fontSize = '32px';

    newUiMarker.onmouseover = function() {
      newUiMarker.style.fontSize = '40px';
    }

    newUiMarker.onmouseleave = function() {
      newUiMarker.style.fontSize = '32px';
    }

    if (localStorage.getItem("showPreview")) {
      if (localStorage.getItem("showPreview") === "true") {
        if (gmmData[i].data.preview) {
          let previewTimeout;

          newUiMarker.addEventListener("mouseover", (e) => {
            
              previewTimeout = setTimeout(() => {
              uiParentContainer.insertAdjacentHTML(
                "beforeend",
                `
            <div class="monomaps-maps-markerPreview fadein" id='preview'>
            <div class="monomaps-maps-previewContainer">
            <h3 class="monomaps-maps-titlePreview">${info.name}</h3>
            <div class='monomaps-maps-descriptPreview'>${info.description}</div>
            </div>
          </div>
            `
              );

              let preview = document.getElementById("preview");
              preview.style.position = "fixed";
              preview.style.top = `75px`;
              preview.style.left =  `5px`;
              preview.style.zIndex = 101;
            }, 600);

          });

          newUiMarker.addEventListener("mouseleave", (e) => {
            clearTimeout(previewTimeout);
            if (document.getElementById("preview")) {
              document.getElementById("preview").classList.add("fadeout");
              setTimeout(() => {
                document.getElementById("preview").remove();
              }, 250);
            }
          });
        }
      }
    }


    uiParentContainer.appendChild(newUiMarker);
  }

}

/** Opens the settings menu */
function showSettings() {


 
  let backdrop = document.createElement("div");
  let newConfiguration = document.createElement("div");
  newConfiguration.classList.add("monomaps-container-template");
  newConfiguration.id = "monomaps-config-panel"

  parentContainer.classList.remove("dragscroll");
  dragscroll.reset();

  newConfiguration.innerHTML = `
  <ul class='config-list' id='config-list'>
    <li class='config-text'>Monomaps Configuration</li>
    <li class='config-item config-button' id='reinitMm'><i class="fa-duotone fa-rotate"></i> Reinitalize Monomaps<br>
    <span class='config-information'>Reloads the Map Markers.</span></li>
    <li class='config-item config-button' id='repairMarkers'><i class="fa-duotone fa-toolbox"></i> Repair Custom Markers<br>
    <span class='config-information'>Fix your custom map markers here.</span></li>
    <li class='config-item config-button' id='mmPreview'><i class="fa-duotone fa-magnifying-glass-location"></i> Monomaps Preview <span id='mmPreviewStatus' class='badge'>Unknown</span><br>
    <span class='config-information'>Enables / Disables the preview when hovering a map marker.</span></li></li>
  </ul>
  `

  backdrop.classList.add("monomaps-maps-notification-alert-background");
  backdrop.id = 'monomaps-config-panel-backdrop'
  backdrop.addEventListener("click", (e) => {
    backdrop.remove();
    newConfiguration.remove();
    parentContainer.classList.add("dragscroll");
    dragscroll.reset();
  });

  parentContainer.appendChild(backdrop);
  parentContainer.appendChild(newConfiguration);

  if(localStorage.getItem('showPreview')){
    if(localStorage.getItem('showPreview') === 'true'){
      document.querySelector("#mmPreviewStatus").classList.add("badge-green");
      document.querySelector("#mmPreviewStatus").innerText = 'Enabled';  
    }else{
      document.querySelector("#mmPreviewStatus").classList.add("badge-red");
      document.querySelector("#mmPreviewStatus").innerText = 'Disabled';  
    }
  }

  document.querySelector("#reinitMm").addEventListener("click", (e) => {
    reloadMarkers();
    mmAlert({
      name: "Monomaps",
      message: "Monomaps has been reinitalized.",
      type: "success",
      ui: true,
    });
  })

  document.querySelector("#repairMarkers").addEventListener("click", (e) => {
    document.querySelector("#config-list").innerHTML = `
    <li class='config-text'><i class="fa-duotone fa-toolbox"></i> Repair Custom Monomaps</li>
    ${monomapMarkers.map( x => `<li class='config-item config-button' onclick="editMarker(` + x.id + `)">` + x.monomaps.name + `<br><span class='config-information'><b>ID:</b> ` + x.id + `<br><b>Map:</b> ` + x.monomaps_data.map + `</span></li>` )}
    <li class='config-item config-button' onclick='reloadSettings()'><i class="fa-duotone fa-arrow-left"></i> Return back<br>
    <span class='config-information'>Return to the Main Menu</span></li>
    `
  })

  document.querySelector("#mmPreview").addEventListener("click", (e) => {
    
    let monomapPreview = localStorage.getItem('showPreview');
    
    if(monomapPreview === 'true'){
      document.querySelector("#mmPreviewStatus").classList.add("badge-red");
      document.querySelector("#mmPreviewStatus").classList.remove("badge-green");
      document.querySelector("#mmPreviewStatus").innerText = 'Disabled';  
      localStorage.setItem('showPreview', 'false');
    }else{
      document.querySelector("#mmPreviewStatus").classList.add("badge-green");
      document.querySelector("#mmPreviewStatus").classList.remove("badge-red");
      document.querySelector("#mmPreviewStatus").innerText = 'Enabled';  
      localStorage.setItem('showPreview', 'true');
    }

    reloadMarkers();

  })
}

function reloadSettings() {
  document.querySelector('#monomaps-config-panel').remove();
  document.querySelector('#monomaps-config-panel-backdrop').remove();
  showSettings();
}

function restoreMarker(id) {

  mmAlert({
    name: `Restoring Map Marker`,
    message: `You're about to restore this map marker to ${localStorage.getItem("mapMode")}, are you sure?`,
    type: "warning",
    ui: true,
    dialog: true
  }).then(result => {
    if(result === true){      
  for (let [i, marker] of monomapMarkers.entries()) {
    let edited = {
      id: id,
      monomaps: {
        name: monomapMarkers[i].monomaps.name,
        description: monomapMarkers[i].monomaps.description,
        image: monomapMarkers[i].monomaps.image,
      },
      monomaps_data: {
        map: localStorage.getItem("timeMode"),
        iconSize: 32,
        hoverSize: 40,
        preview: true,
        type: "Custom",
        position: "absolute",
        top: monomapMarkers[i].monomaps_data.top,
        left: monomapMarkers[i].monomaps_data.left,
        icon: monomapMarkers[i].monomaps_data.icon,
        marker: "marker",
        color: monomapMarkers[i].monomaps_data.color,
        event: "customMarker(this.id)",
      },
    };

    if (marker.id == id) {
      monomapMarkers.splice(i, 1);
      monomapMarkers.push(edited);
      localStorage.setItem("monomapMarkers", JSON.stringify(monomapMarkers));
    }
  }

  window.history.replaceState({}, document.title, "/?intoView=" + id);
  location.reload();
    }
  })
}

function layerContainer() {
  if(document.getElementById('monomaps-maps-layerContainer')){
    document.getElementById('monomaps-maps-layerContainer').classList.add('fadeout');
    setTimeout(() => {
      document.getElementById('monomaps-maps-layerContainer').remove();
    }, 250);
  }else{
    document.body.insertAdjacentHTML("beforeend", `
    <div class='monomaps-maps-layerContainer fadein' id='monomaps-maps-layerContainer'>
    <div class='monomaps-maps-layerItem'>
    <img src='https://i.postimg.cc/6QgWX792/layer1.png' onclick='tMode(1)'>
    <span class='monomaps-maps-layerItemLabel'>Layer 1</span>
    </div>
    <div class='monomaps-maps-layerItem'>
    <img src='https://i.postimg.cc/MTBWKWTs/layer2.png' onclick='tMode(2)'>  
    <span class='monomaps-maps-layerItemLabel'>Layer 2</span>
    </div>
    </div>
    `)
    }
  }

function tMode(type) {
  switch (type) {
    case 1:
        localStorage.setItem('timeMode', 'Layer1');
        window.location.reload();
    break;

    case 2:
        localStorage.setItem('timeMode', 'Layer2');
        window.location.reload();
    break;
  }

  document.getElementById('monomaps-maps-layerContainer').classList.add('fadeout');
  setTimeout(() => {
    document.getElementById('monomaps-maps-layerContainer').remove();
  }, 500);
}

/** Opens the marker filter menu. */
function filterMarkers() {
  if (document.getElementById("infopanel")) {
    document.getElementById('infopanel').innerHTML = `
    <div class='monomaps-maps-infopanel-description' style='margin-top: 25px; max-height: 90% !important;'>
    <b><i class='fa-solid fa-star'></i> Premium Only Markers</b>
    <label class="switch">
    <input id='premiumBoxes' type="checkbox" checked>
    <span class="slider round"></span>
   </label><br><br>
   <b><i class='fa-solid fa-tree'></i> Resource Markers</b>
   <label class="switch">
   <input id='resourceMarkers' type="checkbox" checked>
   <span class="slider round"></span>
  </label><br><br>
  <b><i class='fa-solid fa-users'></i> Public Markers</b>
  <label class="switch">
  <input id='publicMarkers' type="checkbox" checked>
  <span class="slider round"></span>
 </label><br><br>
 <b><i class='fa-solid fa-building-columns'></i> Government Markers</b>
 <label class="switch">
 <input id='governmentMarkers' type="checkbox" checked>
 <span class="slider round"></span>
</label><br><br>
<b><i class='fa-solid fa-house'></i> Rentable Properties Markers</b>
<label class="switch">
<input id='rentableMarkers' type="checkbox" checked>
<span class="slider round"></span>
</label><br><br>
<b><i class='fa-solid fa-screwdriver'></i> Illegal & Contraband Markers</b>
<label class="switch">
<input id='illegalMarkers' type="checkbox" checked>
<span class="slider round"></span>
</label><br><br>
<b><i class='fa-solid fa-basket-shopping'></i> Shop Markers</b>
<label class="switch">
<input id='shopMarkers' type="checkbox" checked>
<span class="slider round"></span>
</label><br><br>
<b><i class='fa-solid fa-map-marker'></i> Custom Markers</b>
<label class="switch">
<input id='customMarkers' type="checkbox" checked>
<span class="slider round"></span>
</label>
<br><br><br>
<a href="#cancelFilter" class='monomaps-maps-button-rounded' id='selectAll'><i class='fa-solid fa-plus'></i> Select All</a>
<a href="#cancelFilter" class='monomaps-maps-button-rounded' id='unselectAll'><i class='fa-solid fa-minus'></i> Unselect All</a> 
<hr>
<a href="#saveFilter" class='monomaps-maps-button-rounded-success' id='saveButton'><i class='fa-solid fa-save'></i> Save Filter Selection</a> <a href="#cancelFilter" class='monomaps-maps-button-rounded-caution' id='cancelButton'><i class='fa-solid fa-x'></i> Exit Menu</a>
    </div>
    `
  }else{
    document.body.insertAdjacentHTML(
      "beforeend",
      `
      <div class='monomaps-maps-infopanel slidein' id='infopanel'>
        <div class='monomaps-maps-infopanel-description' style='margin-top: 25px; max-height: 90% !important;'>
      <b><i class='fa-solid fa-star'></i> Premium Only Markers</b>
      <label class="switch">
      <input id='premiumBoxes' type="checkbox" checked>
      <span class="slider round"></span>
     </label><br><br>
     <b><i class='fa-solid fa-tree'></i> Resource Markers</b>
     <label class="switch">
     <input id='resourceMarkers' type="checkbox" checked>
     <span class="slider round"></span>
    </label><br><br>
    <b><i class='fa-solid fa-users'></i> Public Markers</b>
    <label class="switch">
    <input id='publicMarkers' type="checkbox" checked>
    <span class="slider round"></span>
   </label><br><br>
   <b><i class='fa-solid fa-building-columns'></i> Government Markers</b>
   <label class="switch">
   <input id='governmentMarkers' type="checkbox" checked>
   <span class="slider round"></span>
  </label><br><br>
  <b><i class='fa-solid fa-house'></i> Rentable Properties Markers</b>
  <label class="switch">
  <input id='rentableMarkers' type="checkbox" checked>
  <span class="slider round"></span>
  </label><br><br>
  <b><i class='fa-solid fa-screwdriver'></i> Illegal & Contraband Markers</b>
  <label class="switch">
  <input id='illegalMarkers' type="checkbox" checked>
  <span class="slider round"></span>
  </label><br><br>
  <b><i class='fa-solid fa-basket-shopping'></i> Shop Markers</b>
  <label class="switch">
  <input id='shopMarkers' type="checkbox" checked>
  <span class="slider round"></span>
  </label><br><br>
  <b><i class='fa-solid fa-map-marker'></i> Custom Markers</b>
  <label class="switch">
  <input id='customMarkers' type="checkbox" checked>
  <span class="slider round"></span>
  </label>
  <br><br><br>
  <a href="#cancelFilter" class='monomaps-maps-button-rounded' id='selectAll'><i class='fa-solid fa-plus'></i> Select All</a>
  <a href="#cancelFilter" class='monomaps-maps-button-rounded' id='unselectAll'><i class='fa-solid fa-minus'></i> Unselect All</a> 
  <hr>
  <a href="#saveFilter" class='monomaps-maps-button-rounded-success' id='saveButton'><i class='fa-solid fa-save'></i> Save Filter Selection</a> <a href="#cancelFilter" class='monomaps-maps-button-rounded-caution' id='cancelButton'><i class='fa-solid fa-x'></i> Exit Menu</a>
      </div>
      </div>
      `
    );
  }

  var filterSettings = JSON.parse(localStorage.getItem("filterSettings"));


  let premiumBoxes = document.getElementById("premiumBoxes");
  let resourceMarkers = document.getElementById("resourceMarkers");
  let publicMarkers = document.getElementById("publicMarkers");
  let governmentMarkers = document.getElementById("governmentMarkers");
  let rentableMarkers = document.getElementById("rentableMarkers");
  let illegalMarkers = document.getElementById("illegalMarkers");
  let shopMarkers = document.getElementById("shopMarkers");
  let customMarkers = document.getElementById("customMarkers");

  mmAlert({ name: "filterSettings", message: filterSettings, type: "info" });

  if (filterSettings) {
    filterSettings.premiumMarkers === true
      ? (premiumBoxes.checked = true)
      : (premiumBoxes.checked = false);
    filterSettings.customMarkers === true
      ? (customMarkers.checked = true)
      : (customMarkers.checked = false);
    filterSettings.resourceMarkers === true
      ? (resourceMarkers.checked = true)
      : (resourceMarkers.checked = false);
    filterSettings.publicMarkers === true
      ? (publicMarkers.checked = true)
      : (publicMarkers.checked = false);
    filterSettings.governmentMarkers === true
      ? (governmentMarkers.checked = true)
      : (governmentMarkers.checked = false);
    filterSettings.rentableMarkers === true
      ? (rentableMarkers.checked = true)
      : (rentableMarkers.checked = false);
    filterSettings.illegalMarkers === true
      ? (illegalMarkers.checked = true)
      : (illegalMarkers.checked = false);
    filterSettings.shopMarkers === true
      ? (shopMarkers.checked = true)
      : (shopMarkers.checked = false);
  }

  premiumBoxes.addEventListener("change", function () {
    if (this.checked) {
      filterSettings.premiumMarkers = true;
    } else {
      filterSettings.premiumMarkers = false;
    }
  });

  resourceMarkers.addEventListener("change", function () {
    if (this.checked) {
      filterSettings.resourceMarkers = true;
    } else {
      filterSettings.resourceMarkers = false;
    }
  });

  publicMarkers.addEventListener("change", function () {
    if (this.checked) {
      filterSettings.publicMarkers = true;
    } else {
      filterSettings.publicMarkers = false;
    }
  });

  governmentMarkers.addEventListener("change", function () {
    if (this.checked) {
      filterSettings.governmentMarkers = true;
    } else {
      filterSettings.governmentMarkers = false;
    }
  });

  rentableMarkers.addEventListener("change", function () {
    if (this.checked) {
      filterSettings.rentableMarkers = true;
    } else {
      filterSettings.rentableMarkers = false;
    }
  });

  illegalMarkers.addEventListener("change", function () {
    if (this.checked) {
      filterSettings.illegalMarkers = true;
    } else {
      filterSettings.illegalMarkers = false;
    }
  });

  shopMarkers.addEventListener("change", function () {
    if (this.checked) {
      filterSettings.shopMarkers = true;
    } else {
      filterSettings.shopMarkers = false;
    }
  });

  customMarkers.addEventListener("change", function () {
    if (this.checked) {
      filterSettings.customMarkers = true;
    } else {
      filterSettings.customMarkers = false;
    }
  });

  document.getElementById("cancelButton").addEventListener("click", (e) => {
    document.getElementById("infopanel").classList.add("slideout");
    setTimeout(() => {
      document.getElementById("infopanel").remove();
    }, 700);
  });

  document.getElementById("saveButton").addEventListener("click", (e) => {
    localStorage.setItem("filterSettings", JSON.stringify(filterSettings));
    unload_markers("Reinitalize Markers");
    init();
    mmAlert({
      name: "Map Filtering",
      message: "Saved your filter configuration",
      type: "success",
      ui: true,
    });
  });

  document.getElementById("selectAll").addEventListener("click", () => {
    let premiumBoxes = document.getElementById("premiumBoxes");
    let resourceMarkers = document.getElementById("resourceMarkers");
    let publicMarkers = document.getElementById("publicMarkers");
    let governmentMarkers = document.getElementById("governmentMarkers");
    let rentableMarkers = document.getElementById("rentableMarkers");
    let illegalMarkers = document.getElementById("illegalMarkers");
    let shopMarkers = document.getElementById("shopMarkers");
    let customMarkers = document.getElementById("customMarkers");

    (premiumBoxes.checked = true),
      (resourceMarkers.checked = true),
      (publicMarkers.checked = true),
      (governmentMarkers.checked = true),
      (rentableMarkers.checked = true),
      (illegalMarkers.checked = true),
      (shopMarkers.checked = true),
      (customMarkers.checked = true);

    filterSettings.customMarkers = true;
    filterSettings.governmentMarkers = true;
    filterSettings.illegalMarkers = true;
    filterSettings.premiumMarkers = true;
    filterSettings.publicMarkers = true;
    filterSettings.rentableMarkers = true;
    filterSettings.resourceMarkers = true;
    filterSettings.shopMarkers = true;
  });

  document.getElementById("unselectAll").addEventListener("click", () => {
    let premiumBoxes = document.getElementById("premiumBoxes");
    let resourceMarkers = document.getElementById("resourceMarkers");
    let publicMarkers = document.getElementById("publicMarkers");
    let governmentMarkers = document.getElementById("governmentMarkers");
    let rentableMarkers = document.getElementById("rentableMarkers");
    let illegalMarkers = document.getElementById("illegalMarkers");
    let shopMarkers = document.getElementById("shopMarkers");
    let customMarkers = document.getElementById("customMarkers");

    (premiumBoxes.checked = false),
      (resourceMarkers.checked = false),
      (publicMarkers.checked = false),
      (governmentMarkers.checked = false),
      (rentableMarkers.checked = false),
      (illegalMarkers.checked = false),
      (shopMarkers.checked = false),
      (customMarkers.checked = false);

    filterSettings.customMarkers = false;
    filterSettings.governmentMarkers = false;
    filterSettings.illegalMarkers = false;
    filterSettings.premiumMarkers = false;
    filterSettings.publicMarkers = false;
    filterSettings.rentableMarkers = false;
    filterSettings.resourceMarkers = false;
    filterSettings.shopMarkers = false;
  });
}

init();

var today = new Date();

mmAlert({ name: "mmLocale", message: `Current Time (${today})`, type: "info" });