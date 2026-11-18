# Andar y la Ley Nacional de Salud Mental

Revisión del prototipo frente a la Ley 26.657 de Salud Mental y la Ley 27.130 de Prevención del Suicidio, hecha el 18 de noviembre de 2026 sobre la versión 15.

Es una revisión técnica del funcionamiento de la app, no un dictamen jurídico. Antes de un piloto con vecinos tiene que revisarla el área legal, que además debería sumar el Decreto 603/2013 (reglamentación de la Ley 26.657), la Ley 26.529 de Derechos del Paciente y la Ley 25.326 de Protección de Datos Personales.

## Conclusión

No encontré nada en Andar que vaya en contra de la ley. El diseño general va en la misma dirección: atención en la comunidad y en el primer nivel, la salud mental como derecho, mirada intersectorial, nada de diagnósticos ni medicación, y una salida rápida a la ayuda cuando aparece una señal de alarma.

Sí hay cuatro puntos para ajustar antes de usarlo con personas reales. El más importante es la confidencialidad del tablero cuando se muestra en un televisor.

## Lo que ya está alineado

**La salud mental como derecho y la atención en la comunidad (arts. 1, 9 y 11).** El chequeo es gratuito, no pide obra social ni identificación, y orienta siempre a la salita o al centro de salud del barrio. No promete internaciones ni tratamientos.

**El diagnóstico no se basa en la condición social ni en la identidad (art. 3).** La ley prohíbe diagnosticar sobre la base de la situación socioeconómica, la pertenencia a un grupo o la identidad sexual. En Andar el nivel sale únicamente de las respuestas al PHQ-9 y al GAD-7. Las preguntas sobre trabajo, vivienda, alimentación y red de apoyo, el género y la edad no cambian el nivel de nadie. Así está programado y lo controlan las pruebas automáticas.

**No es un diagnóstico (arts. 3 y 5).** La app lo aclara antes de empezar, en el resultado y en las respuestas de la inteligencia artificial. El nivel ordena a quién conviene contactar primero; no etiqueta a la persona.

**Mirada intersectorial (art. 9).** Las preguntas sobre condiciones de vida y las estadísticas del tablero apuntan justamente a ver la salud mental junto con el trabajo, la vivienda y la alimentación.

**Medicación (art. 12).** La inteligencia artificial tiene prohibido recomendar medicamentos, y la app no habla de medicación en ningún lado.

**No ser identificado ni discriminado (art. 7, inciso i).** Todos los datos son optativos. La edad se pide por franjas, el mapa usa solo la localidad, los grupos con menos de 10 chequeos no se muestran en detalle y los resultados no quedan guardados en el celular, para que en un celular compartido nadie vea los de otra persona.

**Lenguaje.** La app habla de "malestar", "estado de ánimo" y "preocupación y nervios". No usa palabras como "trastorno", "enfermo" o "paciente psiquiátrico".

**Prevención del suicidio (Ley 27.130, arts. 7 y 8).** Ante cualquier señal de riesgo la app corta el cuestionario o la charla y muestra enseguida un botón para llamar a la línea gratuita de salud mental, junto con el 107, el 911 y el 135. La inteligencia artificial no maneja esas situaciones.

## Lo que hay que ajustar

### 1. Confidencialidad del tablero en un televisor (art. 7, inciso l; Ley 27.130, art. 13)

La ley protege la intimidad de la persona y obliga a guardar confidencialidad a quienes conocen un caso de riesgo de suicidio. Hoy el tablero muestra en cada tarjeta el nombre o apodo, el teléfono y el motivo, por ejemplo "respuesta positiva en la pregunta de riesgo". En un televisor de una sala, eso lo puede ver cualquiera que pase.

**Resuelto en la versión 16.** El tablero arranca siempre en "pantalla compartida": cada caso muestra solo las iniciales, el color, la localidad, hace cuánto entró y el estado. Para ver nombres, teléfonos, puntajes y motivos hay que tocar "Ver datos completos (profesional)" y volver a poner la clave. La vista profesional se oculta sola después de 3 minutos sin uso y también al salir del tablero.

### 2. Consentimiento informado (arts. 7, inciso j, y 10)

Hoy la persona marca "Entiendo que es una orientación y acepto responder las preguntas". Eso es un consentimiento, pero no explica qué pasa con lo que responde. Para que sea informado, antes de empezar tendría que decir en pocas palabras qué datos se guardan, quién los ve (el equipo de salud), para qué se usan, que todo es optativo y que puede dejar de responder cuando quiera. Si acepta que la llamen, también tiene que saber quién la va a llamar y para qué.

### 3. Las palabras "riesgo" y "urgente" (art. 5)

La ley dice que un diagnóstico no autoriza a presumir riesgo, y que el riesgo solo surge de una evaluación interdisciplinaria. El chequeo no diagnostica, pero en el tablero el motivo dice "Respuesta positiva en la pregunta de riesgo", y eso se puede leer como una evaluación de riesgo ya hecha.

Propuesta: cambiar el motivo por algo descriptivo, como "Respondió la pregunta 9 con una opción distinta de Nunca", y sumar en el tablero una aclaración: el nivel indica a quién contactar primero y no reemplaza la evaluación del equipo interdisciplinario. "Urgente" puede quedar, porque se refiere a la prioridad de contacto y no a la persona.

### 4. Niñas, niños y adolescentes (art. 26; Ley 27.130, arts. 8 y 12)

La app permite elegir "menos de 18 años", pero el PHQ-9 y el GAD-7 que usa son las versiones para adultos, y para adolescentes rigen además las normas de protección de la infancia. La Ley 27.130 pide dar prioridad a niñas, niños y adolescentes, y prevé la notificación a la autoridad de protección cuando hubo un intento de suicidio.

Propuesta: que el equipo clínico defina el protocolo para menores de 18 (qué cuestionario usar, a partir de qué edad y a quién se avisa). Mientras tanto, si alguien elige "menos de 18", la app podría mostrar un mensaje propio con líneas de ayuda para adolescentes y marcar el caso en el tablero.

## Para el piloto con datos reales

La ley pide un equipo interdisciplinario (art. 8) y la Ley 27.130 un protocolo para el primer nivel de atención (art. 6). Antes del piloto hace falta:

- un protocolo de qué hace el equipo con cada nivel, escrito por el equipo clínico
- ingreso al tablero con usuario y contraseña reales y registro de quién mira cada caso
- definir dónde se guardan los datos y con qué resguardo (Leyes 25.326 y 26.529)
- si los datos se van a usar para investigación, un consentimiento específico para eso (art. 7, inciso m)

## Normas revisadas

- Ley 26.657, Ley Nacional de Salud Mental (2010). Texto en InfoLEG.
- Ley 27.130, Prevención del Suicidio (2015). Texto en InfoLEG.
- Pendiente: Decreto 603/2013 (reglamentación de la Ley 26.657), Ley 26.529 y Ley 25.326.
