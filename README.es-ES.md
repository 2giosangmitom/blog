# Blog Personal de 2giosangmitom

Un blog personal moderno construido con Nuxt 4, que incluye artículos, etiquetas y un diseño limpio y responsivo.

🌐 **Sitio en Vivo**: [https://2giosangmitom.is-a.dev](https://2giosangmitom.is-a.dev)

## ✨ Características

- 📝 **Gestión de Contenido** con Nuxt Content
- 🎨 **UI Moderna** impulsada por Nuxt UI
- 🔍 **Funcionalidad de Búsqueda** de artículos
- 🏷️ **Navegación basada en etiquetas** para la organización del contenido
- 🌙 Soporte para **Modo Oscuro/Claro**
- 📱 **Diseño Responsivo** para todos los dispositivos
- 🎯 **Optimizado para SEO** con sitemap y robots.txt
- ⚡ **Alto Rendimiento** con generación de sitio estático
- 💬 **Formulario de Contacto** con integración de webhook de Discord

## 🛠️ Stack Tecnológico

- **Framework**: [Nuxt 4](https://nuxt.com/)
- **Estilos**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Contenido**: [Nuxt Content](https://content.nuxt.com/)
- **Componentes de UI**: [Nuxt UI](https://ui.nuxt.com/)
- **Iconos**: [Iconify](https://iconify.design/)
- **Utilidades**: [VueUse](https://vueuse.org/)
- **Gestor de Paquetes**: [pnpm](https://pnpm.io/)

## 📦 Requisitos Previos

- [Mise](https://mise.jdx.dev/)

## 🚀 Primeros Pasos

### Instalación

Clona el repositorio e instala las dependencias:

```bash
# Clonar el repositorio
git clone https://github.com/2giosangmitom/2giosangmitom.github.io.git
cd 2giosangmitom.github.io

# Instalar herramientas
mise install

# Instalar dependencias
pnpm install
```

### Desarrollo

Inicia el servidor de desarrollo en `http://localhost:3000`:

```bash
pnpm dev
```

### Construcción de Producción

Genera el sitio estático para producción:

```bash
pnpm generate
```

### Previsualización de la Construcción de Producción

Previsualiza la construcción de producción localmente:

```bash
pnpm preview
```

### Linting

Ejecuta ESLint para verificar la calidad del código:

```bash
pnpm lint
```

## 📁 Estructura del Proyecto

```
├── app/                   # Código fuente de la aplicación
│   ├── assets/            # Recursos estáticos (CSS, fuentes,...)
│   ├── components/        # Componentes de Vue
│   ├── layouts/           # Componentes de diseño (layouts)
│   └── pages/             # Componentes de página (rutas)
├── content/               # Contenido en Markdown
│   ├── articles/          # Artículos del blog
│   └── author/            # Contenido de la página "Acerca de"
├── public/                # Archivos estáticos públicos
├── nuxt.config.ts         # Configuración de Nuxt
├── content.config.ts      # Configuración del módulo de contenido
├── tailwind.config.ts     # Configuración de Tailwind CSS
└── tsconfig.json          # Configuración de TypeScript
```

## ✍️ Escribiendo Artículos

Añade nuevos artículos como archivos Markdown en el directorio `content/articles/`:

```markdown
---
pubDate: 2025-11-28
tags:
  - tag1
  - tag2
---

# Título del Artículo

El contenido de tu artículo aquí...
```

## 🔧 Configuración

### Variables de Entorno

Crea un archivo `.env` en el directorio raíz:

```env
NUXT_DISCORD_WEBHOOK_URL=your_discord_webhook_url
```

### Configuración del Sitio

Edita `nuxt.config.ts` para personalizar los ajustes del sitio:

```typescript
site: {
  url: 'https://your-domain.com',
  name: 'Your Site Name'
}
```

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la [Licencia MIT](LICENSE).

## 🤝 Contribuir

¡Las contribuciones, reportes de errores y solicitudes de funciones son bienvenidos! Siéntete libre de revisar la [página de issues](https://github.com/2giosangmitom/2giosangmitom.github.io/issues).

---

Construido con ❤️ usando [Nuxt](https://nuxt.com/)
