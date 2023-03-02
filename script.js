const deviceModel = navigator.userAgent.match(/iPad|iPod|iPhone/);
const deviceVersion = navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);

if (deviceModel && deviceVersion) {
  const majorVersion = parseInt(deviceVersion[1], 10);
  const minorVersion = parseInt(deviceVersion[2], 10);
  const patchVersion = parseInt(deviceVersion[3] || 0, 10);
  const versionText = `${majorVersion}.${minorVersion}.${patchVersion}`;
  
  let modelText = deviceModel[0];
  if (deviceModel[0] === 'iPad') {
    modelText = `iPad ${getiPadModel()}`;
  } else if (deviceModel[0] === 'iPhone') {
    modelText = `iPhone ${getiPhoneModel()}`;
  }

  const infoText = `${modelText} - iOS ${versionText}`;
  const deviceInfo = document.getElementById("device-info");
  deviceInfo.textContent = infoText;
}

function getiPadModel() {
  const model = navigator.userAgent.match(/iPad(\d+),(\d+)/);
  const modelNumber = parseInt(model[1], 10);
  const buildNumber = parseInt(model[2], 10);
  
  if (modelNumber >= 4) {
    if (buildNumber >= 4 && buildNumber <= 7) {
      return 'Air 2';
    } else if (buildNumber >= 11 && buildNumber <= 12) {
      return '5th Gen';
    } else if (buildNumber >= 14 && buildNumber <= 15) {
      return '6th Gen';
    } else if (buildNumber >= 17 && buildNumber <= 18) {
      return '7th Gen';
    } else if (buildNumber >= 19 && buildNumber <= 20) {
      return '8th Gen';
    } else if (buildNumber >= 21 && buildNumber <= 22) {
      return '9th Gen';
    } else if (buildNumber >= 23 && buildNumber <= 24) {
      return '10th Gen';
    } else {
      return 'unknown';
    }
  } else {
    return 'unknown';
  }
}

function getiPhoneModel() {
  const model = navigator.userAgent.match(/iPhone(\d+),(\d+)/);
  const modelNumber = parseInt(model[1], 10);
  const buildNumber = parseInt(model[2], 10);
  
  if (modelNumber >= 10) {
    if (buildNumber >= 1 && buildNumber <= 2) {
      return 'X';
    } else if (buildNumber >= 3 && buildNumber <= 4) {
      return 'XR';
    } else if (buildNumber >= 5 && buildNumber <= 6) {
      return 'XS';
    } else if (buildNumber >= 7 && buildNumber <= 8) {
      return 'XS Max';
    } else if (buildNumber >= 9 && buildNumber <= 10) {
      return '11';
    } else if (buildNumber >= 11 && buildNumber <= 12) {
      return '11 Pro';
    } else if (buildNumber >= 13 && buildNumber <= 14) {
      return '11 Pro Max';
    } else if (buildNumber >= 15 && buildNumber <= 16) {
      return 'SE 2nd Gen';
    } else if (buildNumber >= 17 && buildNumber <=
