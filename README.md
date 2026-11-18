# Andar

Andar es una herramienta pública y gratuita para acercar la salud a los vecinos y vecinas de La Matanza desde el celular. Funciona como un contenedor de mini-apps, y la primera es **¿Cómo estoy?**, un chequeo breve de bienestar emocional que orienta a la persona y avisa al equipo de salud cuando hace falta intervenir.

Es un prototipo. Todavía no fue validado por un equipo clínico y no debe usarse con pacientes reales.

## Qué hace hoy

- Pantalla de inicio con los mosaicos de las mini-apps.
- Chequeo con el PHQ-9 y el GAD-7, respondido con botones o conversando con un asistente.
- Cuatro preguntas opcionales sobre trabajo, vivienda, alimentación y red de apoyo.
- Resultado en nivel verde, amarillo o rojo, con la indicación de qué hacer.
- Pantalla de crisis con teléfonos de ayuda cuando aparece una señal de riesgo.
- Tablero para el equipo de salud, con los casos ordenados por prioridad.
- Mapa esquemático del partido por localidad, con datos de ejemplo.

## Cómo probarlo

Es un solo archivo, `index.html`. Se abre directamente en el navegador, sin instalar nada.

También está publicada en https://maximus163.github.io/ANDAR/ y se puede instalar en el celular:

- **Android:** abrila en Chrome y tocá "Instalar app" o, desde el menú ⋮, "Agregar a la pantalla principal".
- **iPhone:** abrila en Safari y tocá Compartir → "Agregar a inicio".

Una vez instalada abre aunque no haya conexión. Cuando publiques cambios, subí el número de `VERSION` en `sw.js` para que los celulares bajen la versión nueva.

Los chequeos se guardan solo en el navegador donde se hacen. Los casos y los números del mapa que vienen cargados son inventados.

## Sobre la inteligencia artificial

El asistente conversacional y la explicación del resultado usan la IA de Claude, y por ahora solo funcionan cuando la página se abre como artefacto dentro de claude.ai. Abierta desde este repositorio o desde GitHub Pages, la app funciona igual pero sin asistente: el chequeo se responde con botones.

Para tener la IA fuera de claude.ai hace falta un pequeño servidor que llame a la API de Anthropic, y definir institucionalmente qué servicio se contrata y dónde se alojan los datos.

## Criterios que no se negocian

- **El nivel lo calculan reglas fijas.** La IA conversa y explica, pero no decide el puntaje.
- **Las crisis van por fuera de la IA.** Ante una señal de riesgo, la charla se corta y aparecen los teléfonos de ayuda.
- **Mínimos datos.** El chequeo puede hacerse sin identificarse, y el mapa usa solo la localidad declarada.
- **Para todos los vecinos.** Gratis, sin trámites y sin ningún tipo de identificación partidaria.

Los textos de las preguntas, los puntos de corte (10 para amarillo, 15 para rojo) y los teléfonos de ayuda son provisorios hasta que los revise el referente clínico.

## Pruebas

Las reglas de puntaje tienen pruebas automáticas:

```
node tests/puntaje.test.js
```

## Documentación

- [Contexto del proyecto](docs/contexto.md): decisiones tomadas, estado y pendientes.
- [Plan del triaje](docs/plan-triaje.md): la idea, los criterios de diseño y cómo empezar.

## Autor

Maximiliano Quinci, Área de Sistemas.
