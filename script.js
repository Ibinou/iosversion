// Récupère le nom du produit Apple à partir de l'User-Agent
const productName = navigator.userAgent.match(/iPad|iPhone|iPod/)[0];
document.getElementById("product-name").textContent = productName;

// Récupère la version d'iOS à partir de l'User-Agent
const versionMatch = navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);
const iosVersion = versionMatch ? `${versionMatch[1]}.${versionMatch[2]}.${versionMatch[3] || 0}` : "N/A";
document.getElementById("ios-version").textContent = `iOS version: ${iosVersion}`;

// Récupère l'image du produit
const productImage = document.getElementById("product-image");
productImage.src = "https://upload.wikimedia.org/wikipedia/commons/3/36/IPhone_14_Pro_vector_%28blue%29.svg";
productImage.alt = "Image de mon produit";
