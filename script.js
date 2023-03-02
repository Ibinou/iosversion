const iPhoneModel = navigator.userAgent.match(/iPhone/i);
const iOSVersion = navigator.userAgent.match(/iPhone OS \d+/);

if (iPhoneModel && iOSVersion) {
  const version = iOSVersion[0].replace(/[^0-9_]/g, "").replace("_", ".");
  const versionText = `Version iOS ${version}`;
