const userAgent = window.navigator.userAgent;
let iOSVersion;
let iPhoneModel;

// Détecter la version d'iOS
if (/iP(hone|od|ad)/.test(userAgent)) {
  const iOSVersionMatch = userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);
  if (iOSVersionMatch) {
    iOSVersion = parseInt(iOSVersionMatch[1], 10);
  } else {
    iOSVersion = 0;
  }
}

// Détecter le modèle d'iPhone
if (userAgent.includes("iPhone")) {
  if (userAgent.includes("iPhone 6")) {
    iPhoneModel = "iPhone 6";
  } else if (userAgent.includes("iPhone 6s")) {
    iPhoneModel = "iPhone 6s";
  } else if (userAgent.includes("iPhone 7")) {
    iPhoneModel = "iPhone 7";
  } else if (userAgent.includes("iPhone 8")) {
    iPhoneModel = "iPhone 8";
  } else if (userAgent.includes("iPhone SE (1st generation)")) {
    iPhoneModel = "iPhone SE (1st generation)";
  } else if (userAgent.includes("iPhone SE (2nd generation)")) {
    iPhoneModel = "iPhone SE (2nd generation)";
  } else if (userAgent.includes("iPhone X")) {
    iPhoneModel = "iPhone X";
  } else if (userAgent.includes("iPhone XR")) {
    iPhoneModel = "iPhone XR";
  } else if (userAgent.includes("iPhone XS")) {
    iPhoneModel = "iPhone XS";
  } else if (userAgent.includes("iPhone 11")) {
    iPhoneModel = "iPhone 11";
  } else if (userAgent.includes("iPhone 12")) {
    iPhoneModel = "iPhone 12";
  } else if (userAgent.includes("iPhone 13")) {
    iPhoneModel = "iPhone 13";
  } else {
    iPhoneModel = "un iPhone non identifié";
  }

  document.getElementById("iphone-model").textContent = iPhoneModel;
} else {
  document.getElementById("iphone-model").textContent = "pas un iPhone";
}

// Afficher les informations sur iOS et l'iPhone
if (iOSVersion) {
  document.getElementById("ios-version").textContent = `iOS version ${iOSVersion}`;
} else {
  document.getElementById("ios-version").textContent = "pas sur iOS";
}
