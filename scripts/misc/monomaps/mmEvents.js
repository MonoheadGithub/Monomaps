var startTime = 1665878400;
var endTime = 1665882000;
var ts = Math.round((new Date()).getTime() / 1000);

if(ts >= endTime){
  document.getElementById("eventLogo").remove();
}

function eventBanner () {
  if(document.getElementById("infopanel")){
    document.getElementById('infopanel').remove();
  }

  var formatStart = startTime * 1000
  var dateObject = new Date(formatStart)
  var humanFriendly = dateObject.toLocaleString()

  var formatEnd = endTime * 1000
  var dateObject2 = new Date(formatEnd)
  var humanFriendly2 = dateObject2.toLocaleString()

  document.body.insertAdjacentHTML(
    "beforeend",
    `
    <div class='monomaps-maps-infopanel slidein' id='infopanel'>
    <img class='monomaps-maps-infopanel-img' id='img' src='./assets/monomaps/imgs/Thepurge1.png' onerror='this.src="./assets/monomaps/imgs/noImage.jpg"'>
    <br><br>
    <div class='monomaps-maps-infopanel-description' id='descript'>
    This event starts at <b>${humanFriendly}</b><br><br>
    and concludes at <b>${humanFriendly2}</b>
    <br><br>
    <b style='color: red;'>This is a map-wide event</b>
    <br>
    The spawn locations will be blocked off, which is <u>"Church, Townhall and Hospital"</u>, during this time Job NPCs will be blocked off, and only storage containers provided in safe-zones can be used.
    <br>
    <br>
    You'll only be allowed to use what you have at your disposal far as Weapons, Armor & Ammo goes, you can obtain more loot off people you kill during the purge, but won't be able to store them until the purge concludes.
    <br><br>
    <a href="#" onclick='dismissInfoP()' class='monomaps-maps-button-rounded'><i class='fa-solid fa-x'></i> Dismiss Event Banner</a>
    </div>
    </div>
    `
  );
}