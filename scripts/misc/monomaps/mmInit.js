// if error occurs here, reload 

async function init() {
    try {
      if (!monomapMarkers) {
        monomapMarkers = [];
        localStorage.setItem("monomapMarkers", JSON.stringify(monomapMarkers));
        mmAlert({
          name: "MonomapMarkers",
          message: "No default monomap markers, setting...",
          type: "info",
        });
      }
  
      mmAlert({
        name: "Monomaps Initialize",
        message: "Starting Initialization",
        type: "success",
      });
      console.groupCollapsed(`Additional Initialization Output`);
      if (!localStorage.getItem("filterSettings")) {
        mmAlert({
          title: "Monomaps Config - filterSettings",
          message: "Configuration not found, generating..",
          type: "warning",
        });
        console.time("filterSettingsGenerationTime");
  
        let fSettings = {
          premiumMarkers: true,
          resourceMarkers: true,
          publicMarkers: true,
          governmentMarkers: true,
          rentableMarkers: true,
          illegalMarkers: true,
          shopMarkers: true,
          customMarkers: true,
          eventMarkers: true,
        };
        localStorage.setItem("filterSettings", JSON.stringify(fSettings));
        console.timeEnd("filterSettingsGenerationTime");
        mmAlert({
          name: "Monomaps Config - filterSettings",
          message: "Generated filterSettings to default.",
          type: "warning",
        });
        load_markers();
      } else {
        mmAlert({
          name: "Monomaps Config - filterSettings",
          message: "filterSettings found.",
          type: "success",
        });
        mmAlert({
          name: "Monomaps Config - filterSettings",
          message: "Loading Monomap Markers",
          type: "success",
        });
        load_markers();
        mmAlert({
          name: "Monomaps Config - filterSettings",
          message: "Filtering the markers based on filterSettings.",
          type: "success",
        });
        let filterS = JSON.parse(localStorage.getItem("filterSettings"));
        if (filterS.premiumMarkers === false) {
          hide("Premium");
        }
        if (filterS.resourceMarkers === false) {
          hide("Resource");
        }
        if (filterS.publicMarkers === false) {
          hide("Public");
        }
        if (filterS.governmentMarkers === false) {
          hide("Government");
        }
        if (filterS.rentableMarkers === false) {
          hide("Rentable");
        }
        if (filterS.illegalMarkers === false) {
          hide("Illegal");
        }
        if (filterS.shopMarkers === false) {
          hide("Shop");
        }
        if (filterS.customMarkers === false) {
          hide("Custom");
        }
        if (filterS.eventMarkers === false) {
          hide("Event");
        }
      }
  
      if (!themeMode) {
        mmAlert({
          name: "Monomaps Config - themeMode",
          message: "Configuration not found, generating..",
          type: "warning",
        });
        localStorage.setItem("themeMode", "Modern");
        document.head.insertAdjacentHTML(
          "afterbegin",
          `<link rel="stylesheet" href="./stylesheets/monomaps/MonomapsModern.min.css">`
        );
        mmAlert({
          name: "Monomaps Config - themeMode",
          message: "Generated themeMode to Modern",
          type: "success",
        });
      } else {
        if (themeMode === "Modern") {
          document.head.insertAdjacentHTML(
            "afterbegin",
            `<link rel="stylesheet" href="./stylesheets/monomaps/MonomapsModern.min.css">`
          );
          mmAlert({
            name: "Monomaps Config - themeMode",
            message: "themeMode found. [Modern]",
            type: "success",
          });
        } else {
          document.head.insertAdjacentHTML(
            "afterbegin",
            `<link rel="stylesheet" href="./stylesheets/monomaps/MonomapsModern.min.css">`
          );
          mmAlert({
            name: "Monomaps Config - themeMode",
            message:
              "themeMode found but unknown value provided, using Modern instead.",
            type: "error",
            ui: true,
            timeOut: 10000
          });
          localStorage.setItem('themeMode', 'Modern');
        }
      }
  
      if(!mapMode){
        localStorage.setItem('mapMode', 'Monoford');
        window.location.reload();
      }else{
        if(mapMode === 'Southside'){
          localStorage.setItem('mapMode', 'Monoford');
          localStorage.setItem('timeMode', 'Layer1');
          window.location.reload();
        }else if (mapMode ==='Monoford'){
            document.getElementById('monomaps-maps-maparea').style.background =
            'url("./assets/monomaps/backgrounds/layer1.png")';
            mapareaSize(2048);
            document.getElementById('mapInfo').innerHTML = `Monoford by Monolith Servers`
        }
      }

      if(!timeMode){
        localStorage.setItem('timeMode', 'Layer1');
      }else{
        if(mapMode === 'Southside'){
          localStorage.setItem('timeMode', 'Layer1');
        }else if(mapMode === 'Monoford'){
          if(timeMode === 'Layer1'){
            document.getElementById("monomaps-maps-maparea").style.background =
            "url('./assets/monomaps/backgrounds/layer1.png')";
            mapareaSize(2048);
          }else if(timeMode === 'Layer2'){
            document.getElementById("monomaps-maps-maparea").style.background =
            "url('./assets/monomaps/backgrounds/layer2.png')";
            mapareaSize(2048);
          }
        }
      }
  
      if (!showPreview) {
        mmAlert({
          name: "Monomaps Config - showPreview",
          message: "Configuration not found, generating..",
          type: "warning",
        });
        localStorage.setItem("showPreview", "true");
        reloadMarkers();
        mmAlert({
          name: "Monomaps Config - showPreview",
          message: "Generated showPreview to default",
          type: "success",
        });
      } else {
        mmAlert({
          name: "Monomaps Config - showPreview",
          message: "showPreview found.",
          type: "success",
        });
      }

      if(!localStorage.getItem('dnotif')){
        localStorage.setItem('dnotif', 'disabled');
      }

      if(!localStorage.getItem("mmZoom")){
        localStorage.setItem("mmZoom", "true");
      }

      
      console.groupEnd();
      mmAlert({
        name: "Monomaps Initialize",
        message: "Finished.",
        type: "success",
      });

      document.getElementById('monomaps-maps-maparea').style.display = 'block';
    } catch (intError) {
      mmAlert({
        name: "Monomaps",
        message: "Error detected, terminating Initialization.",
        type: "error",
      });
      console.groupEnd();
      document.getElementById('monomaps-maps-maparea').style.display = 'none';
      mmAlert({
        name: "Monomaps Initialize Error",
        message: intError,
        type: "error",
      });
      mmAlert({
        name: "Monomaps Initialize Error",
        message: "Monomaps ran across a problem, check console.",
        type: "error",
        ui: true,
        dialog: true
      });
    }
  }
  