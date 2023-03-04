// Récupération de la version d'iOS
var iosVersion = parseFloat(
	('' + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0,''])[1])
	.replace('undefined', '3_2').replace('_', '.').replace('_', '')
);

// Récupération du type d'appareil
var deviceType;
if (/iPhone/i.test(navigator.userAgent)) {
	deviceType = 'iPhone';
} else if (/iPad/i.test(navigator.userAgent)) {
	deviceType = 'iPad';
} else {
	deviceType = 'autre';
}

// Affichage de la version d'iOS et du type d'appareil
document.getElementById('ios-version').textContent = iosVersion;
document.getElementById('device-type').textContent = deviceType;

// Affichage de l'image correspondante
var imageContainer = document.getElementById('image-container');
var image = document.createElement('img');
if (deviceType === 'iPhone') {
	if (iosVersion >= 12) {
		image.src = 'iphone_xs.png';
	} else if (iosVersion >= 11) {
		image.src = 'iphone_x.png';
	} else if (iosVersion >= 10) {
		image.src = 'iphone_7.png';
	} else if (iosVersion >= 9) {
		image.src = 'iphone_6s.png';
	} else {
		image.src = 'iphone_6.png';
	}
} else if (deviceType === 'iPad') {
	if (iosVersion >= 12) {
		image.src = 'ipad_pro_11.png';
	} else if (iosVersion >= 11) {
		image.src = 'ipad_pro_10_5.png';
	} else if (iosVersion >= 10) {
		image.src = 'ipad_pro_9_7.png';
	} else {
		image.src = 'ipad_air_2.png';
