const fs = require('fs');
const html = fs.readFileSync(process.argv[2] || require("path").join(__dirname, "..", "index.html"), 'utf8');
const logic = html.split('/*LOGIC-START*/')[1].split('/*LOGIC-END*/')[0];
const { classify } = new Function(logic + '; return { classify };')();
// sintaxis de todo el script
const script = html.split('<script>')[1].split('</script>')[0];
new Function(script);
const z9 = [0,0,0,0,0,0,0,0,0], z7 = [0,0,0,0,0,0,0];
const cases = [
  [z9, z7, 'verde', false],
  [[1,1,1,1,0,0,0,0,0], z7, 'verde', false],            // 4
  [[1,1,1,1,1,0,0,0,0], z7, 'verde', true],             // 5 leve
  [[3,3,3,0,0,0,0,0,0], z7, 'verde', true],             // 9
  [[3,3,3,1,0,0,0,0,0], z7, 'amarillo', false],         // 10
  [[3,3,3,3,2,0,0,0,0], z7, 'amarillo', false],         // 14
  [[3,3,3,3,3,0,0,0,0], z7, 'rojo', false],             // 15
  [z9, [3,3,3,1,0,0,0], 'amarillo', false],             // gad 10
  [z9, [3,3,3,3,3,0,0], 'rojo', false],                 // gad 15
  [[0,0,0,0,0,0,0,0,1], z7, 'rojo', false],             // item 9
  [[3,3,3,3,3,3,3,3,3], [3,3,3,3,3,3,3], 'rojo', false] // 27 / 21
];
let ok = true;
for (const [p, g, nivel, leve] of cases) {
  const r = classify(p, g);
  const pass = r.nivel === nivel && r.leve === leve;
  if (!pass) ok = false;
  console.log(pass ? 'OK ' : 'FALLA', r.phq, r.gad, r.nivel, r.motivo);
}
const parcial = classify([0,0,0,0,0,0,0,0,2], []);
console.log('parcial', JSON.stringify(parcial));
if (parcial.nivel !== 'rojo' || !parcial.riesgo) ok = false;
console.log(ok ? 'TODO OK' : 'HAY FALLAS');
