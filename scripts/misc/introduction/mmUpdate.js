let introConfirm = localStorage.getItem('introConfirm');
let introductionVersion = '40f2df0';


document.getElementById('version').innerText = introductionVersion;


if (!introConfirm || introConfirm !== introductionVersion) {
  mmAlert({
    type: "success",
    name: "Monomaps Updated!",
    message: `Updated to ${introductionVersion}.`,
    ui: true
  })
  localStorage.setItem('introConfirm', introductionVersion);
}

// I'm getting rid of this garbage soon, why tf did i even do this for.