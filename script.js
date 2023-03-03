// Récupère le nom du produit Apple à partir de l'User-Agent
const productName = navigator.userAgent.match(/iPad|iPhone|iPod/)[0];
document.getElementById("product-name").textContent = productName;

// Récupère la version d'iOS à partir de l'User-Agent
const versionMatch = navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);
const iosVersion = versionMatch ? `${versionMatch[1]}.${versionMatch[2]}.${versionMatch[3] || 0}` : "N/A";
document.getElementById("ios-version").textContent = `iOS version: ${iosVersion}`;

// Récupère une image du produit Apple à partir de Wikipédia
fetch("https://en.wikipedia.org/api/rest_v1/page/media-list/Apple_Inc.")
  .then(response => response.json())
  .then(data => {
    const images = data.items.filter(item => item.title.includes(productName));
    if (images.length > 0) {
      const imageUrl = images[0].thumbnail.source;
      document.getElementById("product-image").src = imageUrl;
    }
  });
