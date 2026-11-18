# Andar: contexto del proyecto

## Qué es Andar

Andar es una herramienta pública y gratuita que pensé para acercar la salud a cada vecino de La Matanza desde el celular. Es un contenedor de mini-apps, y la primera se llama ¿Cómo estoy?: un chequeo breve de bienestar emocional que orienta a la persona y avisa al equipo de salud cuando hace falta intervenir.

Es un proyecto personal, pero lo estoy pensando para presentarlo en la Secretaría de Salud de la Municipalidad de La Matanza, donde soy responsable del área de sistemas, y eventualmente en el Hospital Favaloro.

## Decisiones tomadas

El foco está puesto en el triaje de salud mental en el primer nivel de atención, que es donde menos recursos hay y donde llegar a tiempo cambia más las cosas. La persona responde el PHQ-9 y el GAD-7, y el sistema la ubica en nivel verde, amarillo o rojo. Los puntos de corte que usamos por ahora son 10 para amarillo y 15 para rojo, y cualquier respuesta distinta de "Nunca" en la pregunta 9 lleva directo a la pantalla de crisis.

El piloto se hace con la encuesta tradicional, respondida con botones: no tiene costo por uso, no envía datos a terceros y funciona en cualquier celular. El asistente con IA queda para una segunda etapa, cuando la Secretaría defina el costo y el alojamiento de los datos.

La inteligencia artificial tiene un rol acotado. Conversa con la persona, entiende respuestas dichas con sus palabras y explica el resultado, pero no calcula el nivel ni maneja las situaciones de riesgo. Eso queda en reglas fijas y en un protocolo que tiene que definir el equipo clínico.

Al final del chequeo hay cuatro preguntas opcionales sobre trabajo, vivienda, alimentación y red de apoyo, que no modifican el nivel. Con eso y con la localidad que declara cada persona se arma un mapa del partido para la gestión. No se usa la ubicación del celular ni datos personales para el mapa.

El proyecto tiene una mirada justicialista en lo que hace: la salud como derecho, prioridad a quien menos tiene y atención a las condiciones de vida, en la línea del sanitarismo de Ramón Carrillo. Pero la herramienta es para todos los vecinos, sin ningún compromiso político y sin símbolos ni consignas partidarias.

## Qué está hecho

| Pieza | Qué tiene |
| --- | --- |
| Prototipo (`index.html`) | Inicio con mosaicos, chequeo con botones o conversando con el asistente, preguntas sobre el día a día, resultado con explicación de la IA, pantalla de crisis, tablero del equipo y mapa por localidad con datos de ejemplo |
| Presentación para el Secretario | 11 diapositivas con capturas del prototipo y notas del orador, en claude.ai |
| Plan del triaje (`docs/plan-triaje.md`) | La idea, los criterios de diseño y cómo empezar |

El prototipo no guarda los chequeos en el celular, para que en un celular compartido nadie vea los resultados de otra persona. El tablero del equipo tiene su propio enlace (`?equipo`) y para las demostraciones hay un servidor de prueba (`?prueba`). Los textos de las preguntas, los puntos de corte y los teléfonos de ayuda son provisorios hasta que los valide el equipo clínico.

## Pendientes

Antes de presentar hay que completar en la presentación los datos locales que quedaron entre corchetes: cantidad de psicólogos y habitantes, los dos centros del piloto y los plazos. También conviene buscar la fuente oficial de la cifra de una de cada tres personas.

Para avanzar con la app me falta conseguir:

- [ ] Un referente clínico de salud mental que valide preguntas, puntos de corte y protocolo de crisis
- [ ] La lista de centros de salud y recursos comunitarios por localidad
- [ ] La cartografía oficial del partido para reemplazar el mapa esquemático
- [ ] Una definición sobre el servicio de IA y dónde se alojan los datos

## Ideas para innovar

En el orden en que las priorizaría: turno reservado en el momento con registro de si la persona fue, ingreso por voz, repetir el chequeo cada dos semanas, resumen del caso para el profesional, informe mensual para la Secretaría, recursos del barrio, modo acompañante para promotoras o familiares, una versión para el personal de salud y un chequeo para adolescentes en articulación con las escuelas.
