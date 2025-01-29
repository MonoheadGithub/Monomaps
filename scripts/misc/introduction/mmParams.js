const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const adclick = urlParams.get("adclick");
const marker = urlParams.get("marker");
const intoView = urlParams.get("intoView");
const scrollInto = urlParams.get("scrollInto");
const wikiLink = urlParams.get("wikiLink");
const mmReset = urlParams.get("resetMonomaps");
const category = urlParams.get("category");
const gmmUI = urlParams.get("gmmUI");
const host = window.location.host;

setTimeout(() => {
  if (gmmUI){
    GreatMillenniumMine();
  }

  if (intoView){
    customMarker(intoView);

    document
    .getElementById(intoView)
    .scrollIntoView({ block: "center", inline: "center" });

    window.history.replaceState({}, document.title, "/");
  }

  if (scrollInto) {
    document
    .getElementById(scrollInto)
    .scrollIntoView({ block: "center", inline: "center" });

    window.history.replaceState({}, document.title, "/");
  }

  if (marker) {
    // Deprecated, will be removed.

    customMarker(marker);

    document
      .getElementById(marker)
      .scrollIntoView({ block: "center", inline: "center" });
  }

  if (wikiLink === "1") {
    if (document.getElementById("infoPDismiss")) {
      document.getElementById("infoPDismiss").remove();
    }
    if (document.getElementById("searchBar")) {
      document.getElementById("searchBar").remove();
    }
    if (document.getElementById("monolith-logo")) {
      document.getElementById("monolith-logo").remove();
    }

    document.getElementById("monomaps-maps-actionContainer").remove();
    hide(`*${marker}`);
  }

  if (mmReset === "1") {
    mmAlert({
      name: "Reset Monomaps Completely",
      message: "Are you sure about this? This will remove Custom Map Markers, Saved Preferences, Filters, and restore all back to defaults.",
      dialog: true
    }).then((result) => {
      if (result === true) {
        mmAlert({
          id: "refreshMm",
          name: "Seconds until Reset",
          message: "To cancel the reset, click here.",
          type: "warning",
          timeOut: 11000,
          ui: true,
          onclick: function() {
            window.history.replaceState({}, document.title, "/");
            window.location.reload();
          }
        })
        let timeleft = 10;
        setInterval(() => {
          document.querySelector("#refreshMm > .monomaps-maps-notification-title").innerHTML = timeleft + " Seconds until Reset"
          timeleft = timeleft - 1;
        }, 1000);
        setTimeout(() => {
          localStorage.clear();
          window.history.replaceState({}, document.title, "/");
          window.location.reload();
        }, 11000);
      } else {
        window.history.replaceState({}, document.title, "/");
      }
    })
  }



  if (category) {
    hide(`!${category}`);
  }
}, 500);
