const iphoneModels = [
  {
    name: 'iPhone 5',
    image: 'images/iphone-5.png',
  },
  {
    name: 'iPhone 6',
    image: 'images/iphone-6.png',
  },
  {
    name: 'iPhone 7',
    image: 'images/iphone-7.png',
  },
  {
    name: 'iPhone 8',
    image: 'images/iphone-8.png',
  },
  {
    name: 'iPhone X',
    image: 'images/iphone-x.png',
  },
  {
    name: 'iPhone 11',
    image: 'images/iphone-11.png',
  },
  {
    name: 'iPhone 12',
    image: 'images/iphone-12.png',
  },
];

const container = document.getElementById('container');
const nameElement = document.getElementById('iphone-name');
const infoElement = document.getElementById('iphone-info');
const imageElement = document.getElementById('iphone-image');

const iOSversion = () => {
  if (/iP(hone|od|ad)/.test(navigator.platform)) {
    const v = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
    return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
  }
  return null;
};

const getIphoneModel = () => {
  const version = iOSversion();
  let model = '';
  if (version) {
    const { width, height } = window.screen;
    const screenHeight = Math.max(width, height);
    switch (screenHeight) {
      case 480:
        model = 'iPhone 4/4s';
        break;
      case 568:
        model = 'iPhone 5/SE';
        break;
      case 667:
        if (version[0] === 8) {
          model = 'iPhone 6';
        } else if (version[0] === 9) {
          model = 'iPhone 6s';
        } else {
          model = 'iPhone 7/8/SE2';
        }
        break;
      case 736:
        if (version[0] === 8 || version[0] ===
