# Portfolio Whiteboard — Santiago Navarro

Portafolio interactivo estilo whiteboard. Los elementos son arrastrables y la navegación entre proyectos es fluida.

---

## Estructura de archivos

```
portfolio/
├── index.html          ← El sitio completo
├── projects.js         ← Tus proyectos (edita este archivo)
├── README.md
└── assets/
    ├── logos/          ← Logos de cada marca (PNG con fondo transparente)
    ├── photos/         ← Fotos polaroid de cada proyecto
    ├── posts/          ← Imágenes de publicaciones (formato cuadrado)
    └── web/            ← Capturas de pantalla de sitios web
```

---

## Cómo agregar un proyecto

Abre `projects.js` y copia el bloque de un proyecto existente. Llena los campos:

| Campo | Descripción |
|-------|-------------|
| `id` | Identificador único (sin espacios, ej: `"mi-proyecto"`) |
| `brand` | Nombre de la marca o proyecto |
| `tagline` | Subtítulo corto |
| `logoText` | 2–3 letras que aparecen si no hay imagen de logo |
| `logo` | Ruta a la imagen del logo, ej: `"assets/logos/marca.png"` — o `null` |
| `description` | Párrafo descriptivo de la marca |
| `links` | Array de links: `[{ label: "sitio.com", url: "https://sitio.com" }]` |
| `photo` | Ruta a foto polaroid, o `null` |
| `photoCaption` | Pie de foto |
| `myRole` | Tu rol en el proyecto |
| `context` | Tipo de trabajo (ej: `"Branding · Copy web"`) |
| `challenge` | El reto creativo del proyecto |
| `campaignCopy` | El headline o copy principal |
| `rational` | Párrafo explicando el racional creativo |
| `posts` | Array de 3 rutas a imágenes, ej: `["assets/posts/p1.jpg", null, null]` |
| `postCaptions` | Array de 3 textos para los posts |
| `webPreview` | Captura del sitio web, o `null` |
| `webUrl` | URL que aparece en la barra del browser |

---

## Cómo subir a GitHub Pages

1. Crea un repositorio en GitHub (puede ser privado o público)
2. Sube todos los archivos (incluyendo la carpeta `assets/`)
3. Ve a **Settings → Pages**
4. En "Source" selecciona **Deploy from a branch → main → / (root)**
5. GitHub te dará una URL tipo: `https://tuusuario.github.io/portfolio/`

Con un repositorio **privado** solo tú puedes ver el código fuente, pero el sitio publicado es accesible para quien tenga el link.

---

## Personalización rápida

En `index.html`, busca la sección `/* ─── LAYOUT TEMPLATE ─── */` para mover la posición inicial de cada elemento en el whiteboard.

Para cambiar colores, busca `:root {` y modifica las variables CSS.
