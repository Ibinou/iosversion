// Récupère le nom du produit Apple à partir de l'User-Agent
const productName = navigator.userAgent.match(/iPad|iPhone|iPod/)[0];
document.getElementById("product-name").textContent = productName;

// Récupère la version d'iOS à partir de l'User-Agent
const versionMatch = navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);
const iosVersion = versionMatch ? `${versionMatch[1]}.${versionMatch[2]}.${versionMatch[3] || 0}` : "N/A";
document.getElementById("ios-version").textContent = `iOS version: ${iosVersion}`;
