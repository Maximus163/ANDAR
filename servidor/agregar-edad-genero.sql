-- Andar: agrega edad y género a la tabla del servidor de prueba.
-- Solo hace falta si la tabla se creó antes del 18/11/2026 (versión 9 de la app).
-- Pegalo en el "SQL Editor" de Supabase y tocá "Run". Se puede correr más de una vez sin problema.

alter table public.chequeos add column if not exists edad text
  check (edad in ('Menos de 18', '18 a 29', '30 a 44', '45 a 59', '60 o más'));

alter table public.chequeos add column if not exists genero text
  check (genero in ('Mujer', 'Varón', 'Mujer trans / travesti', 'Varón trans / masculinidad trans', 'No binario', 'Otra identidad'));
