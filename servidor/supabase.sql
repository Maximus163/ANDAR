-- Andar: base de datos del servidor de PRUEBA en Supabase.
-- Pegalo entero en el "SQL Editor" del proyecto y tocá "Run".
--
-- Es solo para demostraciones con datos inventados: cualquiera que tenga la
-- dirección de la app con ?prueba puede cargar chequeos y ver la lista.
-- No sirve para datos reales de vecinos.

create table if not exists public.chequeos (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  alias       text check (char_length(alias) <= 30),
  localidad   text check (char_length(localidad) <= 40),
  contacto    boolean not null default false,
  tel         text check (char_length(tel) <= 20),
  phq         smallint not null check (phq between 0 and 27),
  gad         smallint not null check (gad between 0 and 21),
  nivel       text not null check (nivel in ('verde', 'amarillo', 'rojo')),
  motivo      text check (char_length(motivo) <= 80),
  ctx         jsonb check (ctx is null or pg_column_size(ctx) < 500),
  estado      text not null default 'Pendiente' check (estado in ('Pendiente', 'Contactado', 'Sin acción'))
);

-- Edad (por franjas) y género (opciones del Censo 2022). Opcionales: vacío es "prefiero no decir".
alter table public.chequeos add column if not exists edad text
  check (edad in ('Menos de 18', '18 a 29', '30 a 44', '45 a 59', '60 o más'));
alter table public.chequeos add column if not exists genero text
  check (genero in ('Mujer', 'Varón', 'Mujer trans / travesti', 'Varón trans / masculinidad trans', 'No binario', 'Otra identidad'));

alter table public.chequeos enable row level security;

-- Permisos explícitos por si el proyecto no expone las tablas nuevas automáticamente.
grant usage on schema public to anon;
grant select, insert on public.chequeos to anon;

-- La app (rol "anon") puede cargar chequeos y leer la lista.
drop policy if exists "prueba: cargar" on public.chequeos;
create policy "prueba: cargar" on public.chequeos for insert to anon with check (true);

drop policy if exists "prueba: leer" on public.chequeos;
create policy "prueba: leer" on public.chequeos for select to anon using (true);

-- Desde el tablero solo se puede cambiar el estado (pendiente / contactado), nada más.
drop policy if exists "prueba: cambiar estado" on public.chequeos;
create policy "prueba: cambiar estado" on public.chequeos for update to anon using (true) with check (true);
revoke update on public.chequeos from anon;
grant update (estado) on public.chequeos to anon;

-- Borrar no se puede desde la app. Para vaciar la tabla después de una demo:
--   truncate public.chequeos;
