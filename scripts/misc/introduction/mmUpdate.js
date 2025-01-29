let introConfirm = localStorage.getItem('introConfirm');
let introductionVersion = 'v2.1.6';

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
