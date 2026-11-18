// Controla que la versión que se ve al pie del inicio (index.html) sea la misma que la del service worker (sw.js).
// Si no coinciden, la página mostraría un número que no corresponde a lo que tiene guardado el celular.
// Correr con: node tests/version.test.js
const fs = require('fs');
const path = require('path');
const raiz = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(raiz, 'index.html'), 'utf8');
const sw = fs.readFileSync(path.join(raiz, 'sw.js'), 'utf8');

const deLaPagina = (html.match(/VERSION_APP = '([^']+)'/) || [])[1];
const delSW = (sw.match(/const VERSION = "([^"]+)"/) || [])[1];

if (!deLaPagina || !delSW) {
  console.log('HAY FALLAS: no encontré la versión en', !deLaPagina ? 'index.html' : 'sw.js');
  process.exit(1);
}
if (deLaPagina !== delSW) {
  console.log('HAY FALLAS: index.html dice ' + deLaPagina + ' y sw.js dice ' + delSW + '. Subí las dos al mismo número.');
  process.exit(1);
}
console.log('OK  versión ' + deLaPagina + ' en index.html y sw.js');
