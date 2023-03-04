const iosDeviceModels = [
  'iPhone1,1', 'iPhone1,2', 'iPhone2,1', 'iPhone3,1', 'iPhone3,2', 'iPhone3,3',
  'iPhone4,1', 'iPhone5,1', 'iPhone5,2', 'iPhone5,3', 'iPhone5,4', 'iPhone6,1',
  'iPhone6,2', 'iPhone7,1', 'iPhone7,2', 'iPhone8,1', 'iPhone8,2', 'iPhone8,4',
  'iPhone9,1', 'iPhone9,2', 'iPhone9,3', 'iPhone9,4', 'iPhone10,1', 'iPhone10,2',
  'iPhone10,3', 'iPhone10,4', 'iPhone10,5', 'iPhone10,6', 'iPhone11,2', 'iPhone11,4',
  'iPhone11,6', 'iPhone11,8', 'iPhone12,1', 'iPhone12,3', 'iPhone12,5', 'iPhone12,8',
  'iPhone13,1', 'iPhone13,2', 'iPhone13,3', 'iPhone13,4',
];

const getiOSDeviceModel = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  const regex = /\b(iPhone(?: SE)?|iPod(?: touch)?|iPad(?: Pro)?)\b[,/]\s*(\w+)/;
  const match = regex.exec(userAgent) || [];
  return `${match[1]} ${match[2]}` || 'unknown';
}

const showDeviceImage = () => {
  const model = getiOSDeviceModel();
  const img = document.createElement('img');
  img.className = 'product-image';
  
  switch (model) {
    case 'iPhone1,1': // iPhone
      img.src = 'img/iphone-1.jpg';
      break;
    case 'iPhone2,1': // iPhone 3G
      img.src = 'img/iphone-3g.jpg';
      break;
    case 'iPhone3,1': // iPhone 4
    case 'iPhone3,2':
    case 'iPhone3,3':
      img.src = 'img/iphone-4.jpg';
      break;
    case 'iPhone4,1': // iPhone 4S
      img.src = 'img/iphone-4s.jpg';
      break;
    case 'iPhone5,1': // iPhone 5
    case 'iPhone5,2':
      img.src = 'img/iphone-5.jpg';
      break;
    case 'iPhone5,3': // iPhone 5c
    case 'iPhone5,4':
      img.src = 'img/iphone-5c.jpg';
      break;
    case 'iPhone6,1': // iPhone 5s
    case 'iPhone6,2':
      img.src = 'img/iphone-5s.jpg';
      break;
    case 'iPhone7,1': // iPhone 6 Plus
      img.src = 'img/iphone-6-plus.jpg';
      break;
    case 'iPhone13,4': // iPhone 12 Pro Max
      img.src = 'https://ipsw.me/assets/devices/iPhone13,4.png';
      break;
 
      
