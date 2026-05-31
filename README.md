# Fiesta Lovecraft

Sitio Astro para la invitación de la fiesta y una web app de apoyo en `/game`.

## Rutas

- `/`: invitación actual de Astro.
- `/game`: app React para gestionar la fiesta en vivo.
- `/party/:code`: ruta lógica usada por la app para enlaces compartidos. En Astro se puede redirigir o abrir desde `/game` si se despliega con fallback; en local usa `/game` para crear y entrar.

## Stack

- Astro como host del sitio
- React + TypeScript como island para la app de juego
- Tailwind CSS
- Supabase Database + Realtime
- Sin backend propio
- Sin login

## Instalación

```bash
npm install
cp .env.example .env
npm run dev
```

Configura `.env`:

```bash
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

## Supabase

1. Crea un proyecto en Supabase.
2. Abre el SQL editor.
3. Ejecuta `src/supabase-schema.sql`.
4. Activa Realtime para `parties`, `players`, `rules`, `prophecies`, `ritual_votes` y `game_logs`.

Para uso casual de fiesta puedes dejar RLS desactivado o usar políticas permisivas. Esto no equivale a seguridad de producción. El `host_token` no es seguridad fuerte.

## Uso de la App

- Abre `/game`.
- Crea una fiesta y comparte el código o link de jugadores.
- Guarda el link de anfitrión con `?host=host_token`.
- Jugadores entran, escriben su nombre y quedan sincronizados.
- El anfitrión asigna roles, administra Locura, reglas, minijuegos, timer y Ritual Final.

El alcohol nunca es obligatorio. Todo brindis, brebaje o tributo debe tener alternativa sin alcohol o reto equivalente.
