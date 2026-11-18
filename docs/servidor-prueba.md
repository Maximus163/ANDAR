# Servidor de prueba

Sirve para mostrar el tablero del equipo con chequeos que llegan desde varios celulares, por ejemplo en un televisor durante una presentación. Usa Supabase, que tiene un plan gratuito y no hace falta mantener un servidor propio.

Es solo para demostraciones con datos inventados. Cualquiera que tenga el enlace de prueba puede cargar chequeos y ver la lista completa, así que no sirve para un piloto con vecinos reales. Para eso la Secretaría tiene que definir dónde se alojan los datos, el tablero necesita usuario y contraseña, y tiene que quedar registro de quién mira cada caso.

## Cómo funciona

- La app normal (`https://maximus163.github.io/ANDAR/`) no cambia: guarda todo en el celular.
- Con `?prueba` al final (`https://maximus163.github.io/ANDAR/?prueba`) cada chequeo se envía al servidor y el tablero muestra los de todos. El tablero se actualiza solo cada 15 segundos.
- En modo prueba la app avisa en el chequeo que hay que usar un nombre y un teléfono inventados.
- El nivel lo sigue calculando la app con las mismas reglas. El servidor solo guarda el resultado.

## Puesta en marcha

1. Crear una cuenta en https://supabase.com y un proyecto nuevo. Conviene elegir la región de São Paulo, que es la más cercana. La contraseña de la base que pide no la vamos a usar en la app.
2. En el proyecto, abrir **SQL Editor**, pegar todo el contenido de [`servidor/supabase.sql`](../servidor/supabase.sql) y tocar **Run**. Eso crea la tabla `chequeos` con sus reglas.
3. En **Project Settings → API Keys** (o **Data API**), copiar:
   - la **URL del proyecto**, que tiene la forma `https://xxxx.supabase.co`
   - la clave **publishable** (empieza con `sb_publishable_`) o, en proyectos más viejos, la **anon public**.

   Nunca usar la clave **secret** ni la **service_role**: esas saltean todas las reglas y no pueden quedar en la página.
4. Cargar esos dos datos en `index.html`, en la línea `var SERVIDOR = { url: '', key: '' };`, y publicar.

## Si la tabla se creó antes de la versión 9

La versión 9 suma edad y género. Si la tabla ya existía, hay que correr una vez [`servidor/agregar-edad-genero.sql`](../servidor/agregar-edad-genero.sql) en el SQL Editor. Mientras no se corra, la app sigue guardando los chequeos, pero sin esos dos datos.

## Después de una demo

Para vaciar la lista, en el SQL Editor:

```sql
truncate public.chequeos;
```

En el plan gratuito, Supabase pausa el proyecto si pasa una semana sin uso. Se reactiva desde el panel con un clic.
