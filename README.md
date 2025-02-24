# 🏢 Contact Center - Frontend

Aplicación desarrollada en **Next.js + TypeScript** para la gestión de agentes y clientes en espera dentro de un **Contact Center**. Permite ver en tiempo real el estado de los agentes y los clientes en espera, con filtros y actualizaciones dinámicas mediante WebSockets.

---

## 🚀 **Tecnologías Utilizadas**

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React Icons**
- **WebSockets**

---

## 📌 **Características**

✅ **Lista de agentes** con nombre, estado y tiempo de espera.  
✅ **Lista de clientes** con nombre y tiempo de espera.  
✅ **Filtros dinámicos** usando QueryParams.  
✅ **WebSockets** para actualizaciones en tiempo real.
✅ **Renderizado tanto del lado del cliente como del servidor.** para un mejor rendimiento y experiencia de usuario
✅ **MockData** si el backend no responde.  
✅ **Diseño minimalista y responsive**.

---

## 🛠 **Estructura del Proyecto**

```bash
contact-center-app/
│── public/                     # Archivos estáticos
│── src/
│   ├── app/                     # Rutas de la aplicación
│   │   ├── agents/              # Página de agentes y sus componentes
│   │   ├── clients/             # Página de clientes y sus componentes
│   │   ├── layout.tsx           # Layout principal
│   │   ├── page.tsx             # Página de inicio
│   ├── components/              # Componentes reutilizables
│   │   ├── Background.tsx       # Fondo o background
│   │   ├── Footer.tsx           # Pie de página
│   ├── context/                 # Manejo de estado global
│   ├── hooks/                   # Custom hooks
│   ├── services/                # Llamadas a la API
│   ├── utils/                   # Funciones auxiliares
│── next.config.mjs              # Configuración de Next.js
│── tsconfig.json                # Configuración de TypeScript
│── package.json                 # Dependencias y scripts
│── tailwind.config.ts           # Configuración de Tailwind CSS
│── .eslintrc.json               # Configuración de ESLint

```

---

## 🔄 **Manejo de Estado y Actualización en Tiempo Real**

Se usa **Context API** para el estado global de los agentes y clientes, asegurando que la información se actualice de forma eficiente en toda la app.

**Flujo de Datos:**  
1️⃣ Se hace una llamada a la API RESTful para obtener los datos iniciales.  
2️⃣ Se usa **WebSockets** para recibir cambios en tiempo real.  
3️⃣ Si el backend falla, se muestran **datos de prueba (MockData)**.

---

## 🔍 **MPA vs SPA**

| **Característica** | **SPA (Single Page App)** | **MPA (Multi Page App)**   |
| ------------------ | ------------------------- | -------------------------- |
| Renderizado        | Cliente                   | Servidor                   |
| Velocidad inicial  | Lenta (Carga única)       | Rápida                     |
| Navegación         | Sin recarga               | Recarga completa de página |
| SEO                | Más difícil               | Mejor optimizado           |

Este proyecto usa **Next.js** para obtener lo mejor de ambos mundos:  
✔ **SSR (Server Side Rendering)** para mejorar SEO.  
✔ **CSR (Client Side Rendering)** para una experiencia fluida.

---

## 🎨 **Diseño y Estilos**

- **Tailwind CSS** para un diseño limpio y responsive.
- **Animaciones en hover y transiciones suaves**.
- **Colores adaptados para mejor usabilidad**.
- **Loadings para experiencia de usuario y Streaming**.

---

## ▶ **Cómo Ejecutar el Proyecto**

1️⃣ Clonar el repositorio

```bash
git clone https://github.com/tu-repo/contact-center-frontend.git
cd contact-center-frontend
```

Instalar dependencias

```bash
npm install
```

Ejecutar el proyecto

```bash
npm run dev
```

Abrir en el navegador

```bash
http://localhost:3000
```

## ▶ **Deploy de la App**

https://contact-center-app.vercel.app
