# Mantra del día

Widget web sin dependencias que muestra un mantra budista distinto cada día, con traducción, tradición de origen y una mala digital de 108 cuentas.

## Usar

Abre `index.html` en el navegador, o sírvelo localmente:

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Publicar gratis (GitHub Pages)

1. Sube la carpeta a un repositorio de GitHub.
2. Settings → Pages → Branch `main` / root.
3. Tu widget queda en `https://<usuario>.github.io/<repo>/`.

## Usarlo como widget

- **PWA:** desde Chrome/Edge/Safari usa "Instalar app" o "Añadir a pantalla de inicio".
- **Incrustar** (Notion, páginas web): `<iframe src="https://.../index.html?compact=1" width="300" height="340" style="border:0"></iframe>`
- **Escritorio:** en Chrome/Edge, "Instalar" la PWA la abre en su propia ventana pequeña que puedes dejar en un rincón de la pantalla.

## Personalizar

- Agrega o edita textos en `mantras.js`, en las listas `MANTRA_ROWS` y `VERSE_ROWS` (texto, tradición, significado y transliteración opcional).
- El mantra del día es `número de día % total de mantras`, así que cambia a medianoche (hora local) sin servidor.
- Colores en las variables de `style.css`.

Las traducciones son aproximadas; cada tradición las interpreta con matices propios.
