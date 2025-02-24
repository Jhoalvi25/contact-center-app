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
✅ **MockData** si el backend no responde.  
✅ **Diseño minimalista y responsive**.  

---

## 🛠 **Estructura del Proyecto**  

📂 contact-center-frontend 
├── 📂 components # Componentes reutilizables │ ├── Header.tsx # Barra de navegación │ ├── Footer.tsx # Pie de página │ ├── AgentCard.tsx # Tarjeta de agente │ ├── ClientCard.tsx # Tarjeta de cliente ├── 📂 context # Estado global con useContext ├── 📂 hooks # Hooks personalizados (WebSockets) ├── 📂 pages # Rutas principales │ ├── index.tsx # Página principal │ ├── agents.tsx # Página de agentes │ ├── clients.tsx # Página de clientes ├── 📂 services # Llamadas a la API RESTful ├── 📂 styles # Estilos globales ├── 📄 layout.tsx # Layout global ├── 📄 next.config.js # Configuración de Next.js ├── 📄 package.json # Dependencias └── 📄 README.md # Documentación
