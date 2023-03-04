var iDeviceTypes = [  "iPad Simulator",  "iPhone Simulator",  "iPod Simulator",  "iPad",  "iPhone",  "iPod"];

if (!!navigator.platform) {
  while (iDeviceTypes.length) {
    if (navigator.platform === iDeviceTypes.pop()){ 
      // Update the HTML element with the detected iDevice type
      document.getElementById("idevice-type").textContent = navigator.platform;
      break;
    }
  }
}
