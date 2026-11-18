# Andar: instrucciones para Claude Code

Andar es una app web de salud pública para los vecinos de La Matanza. La primera mini-app es "¿Cómo estoy?", un triaje de salud mental. Leé `docs/contexto.md` antes de cambiar algo importante.

## Estructura

- `index.html`: toda la app en un solo archivo (HTML, CSS y JavaScript sin dependencias ni build).
- La lógica de puntaje está entre los comentarios `/*LOGIC-START*/` y `/*LOGIC-END*/`, y la del mapa entre `/*MAP-START*/` y `/*MAP-END*/`. Las pruebas leen esos bloques: no los borres.
- `tests/puntaje.test.js`: pruebas de las reglas. Correlas con `node tests/puntaje.test.js` después de cualquier cambio en el puntaje.
- El asistente con IA usa `window.claude.use('sample')`, que solo existe dentro de un artefacto de claude.ai. Fuera de ahí la app tiene que seguir funcionando con botones.

## Reglas de seguridad clínica

- El nivel verde, amarillo o rojo sale siempre de la función `classify`. Nunca dejes que la IA lo calcule o lo modifique.
- Cualquier respuesta distinta de "Nunca" en la pregunta 9 del PHQ-9, o un mensaje de riesgo en la charla, lleva a la pantalla de crisis. No agregues caminos que la salteen.
- La IA no diagnostica, no recomienda medicación y no promete turnos ni servicios.
- Los textos de preguntas, puntos de corte y teléfonos son provisorios: marcá como provisorio todo texto clínico nuevo.

## Enfoque

- Herramienta gratuita, para cualquier vecino, pensada para celulares sencillos y conexiones lentas.
- Mirada social en lo que la app hace: prioridad a quien menos tiene y atención a trabajo, vivienda, alimentación y red de apoyo. Sin símbolos, nombres ni consignas partidarias.
- Lenguaje cercano, de vecino a vecino, en español rioplatense y tratando de vos.
- Datos de ejemplo siempre marcados como tales.

## Documentos

Los documentos profesionales del proyecto se escriben con redacción natural y humana, sin que se note que los armó una IA.
