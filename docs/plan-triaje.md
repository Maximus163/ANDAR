# Triaje de salud mental con IA: plan del proyecto

## La idea

La propuesta es ofrecer una primera orientación en salud mental a la que cualquier persona pueda acceder desde su celular, sin turno previo y en pocos minutos. Elegí empezar por el triaje porque es un problema acotado, se puede medir y es justamente donde el primer nivel de atención hoy tiene menos recursos.

El recorrido es simple. La persona ingresa, lee un aviso claro de que esto no es un diagnóstico ni reemplaza la consulta con un profesional, y da su consentimiento. Después responde, en formato de conversación, cuestionarios breves y validados que ya se usan en la práctica clínica: el PHQ-9 para depresión, el GAD-7 para ansiedad y, si el equipo lo considera útil, el AUDIT-C para consumo de alcohol.

Con esas respuestas el sistema calcula un puntaje y ubica a la persona en uno de tres niveles. En el nivel verde recibe información y recursos de autocuidado. En el amarillo se le sugiere hacer una consulta y se la orienta hacia el centro de salud que le corresponde. En el rojo la derivación es prioritaria y el contacto con una persona del equipo es inmediato.

Del otro lado, el equipo de salud cuenta con un tablero donde ve los casos amarillos y rojos, para que ninguno quede sin seguimiento.

## Criterios de diseño

Hay tres decisiones que conviene dejar firmes desde el principio, porque de ellas depende que el proyecto sea confiable.

La primera es que el puntaje lo calculan reglas fijas y no la inteligencia artificial. La IA queda para lo que mejor hace en este contexto: conversar con calidez, aclarar dudas y explicar el resultado en palabras sencillas. De esa manera el triaje se puede auditar y da siempre el mismo resultado ante las mismas respuestas, que es lo primero que va a pedir cualquier comité que lo evalúe.

La segunda es que las situaciones de crisis se manejan por fuera de la IA. Si alguien marca ideación suicida en el ítem 9 del PHQ-9, o escribe algo que indique riesgo, la conversación se interrumpe y se muestran de inmediato los contactos de emergencia y de guardia. Ese protocolo lo define el equipo clínico, no el área de sistemas.

La tercera es pedir la menor cantidad de datos posible. Se puede empezar de forma anónima o con un seudónimo, y solicitar la identificación únicamente cuando la persona acepta que la contacten.

## Cómo empezar

Mi propuesta es arrancar con un prototipo en formato de aplicación web, que permita mostrarlo funcionando sin esperar a que se resuelva la línea institucional de WhatsApp. Ese canal se puede incorporar más adelante, cuando el recorrido ya esté probado.

El trabajo se ordena en tres etapas. Primero, el prototipo, con los cuestionarios, el cálculo del puntaje, las pantallas de resultado y un tablero básico. Luego, la validación clínica, en la que un psicólogo o un psiquiatra revisa los textos, los puntos de corte y el protocolo de crisis. Por último, una prueba piloto acotada en uno o dos centros de salud de La Matanza, o en un servicio del hospital.

En el piloto interesa medir tres cosas: cuántas personas completan el cuestionario, cuántas son derivadas y cuántas llegan efectivamente a la consulta. Ese último dato es el que va a mostrar si la herramienta sirve.
