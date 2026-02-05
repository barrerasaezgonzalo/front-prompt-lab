# Prompt Lab — Frontend

## Descripción general

**Prompt Lab** es una aplicación web diseñada para crear, refinar, versionar y comparar prompts de forma estructurada y profesional. El foco del producto no es solo “escribir prompts”, sino **convertir el proceso iterativo en un flujo trazable, reproducible y medible**, similar a cómo se trabaja con código fuente.

Este repositorio corresponde al **frontend**, construido con **Next.js (App Router)** y pensado para integrarse con una **API backend en Python**, autenticación y persistencia mediante **Supabase**, y generación de contenido asistida por **modelos de lenguaje vía Groq**.

---

## Objetivo del producto

Prompt Lab busca resolver un problema común en el uso de LLMs:

> Los prompts suelen evolucionar de forma caótica, sin versiones, sin contexto y sin criterios claros de mejora.

La aplicación permite:

- Iterar prompts paso a paso
- Mantener un historial completo de versiones
- Refinar prompts mediante preguntas guiadas
- Comparar versiones como en un flujo tipo GitHub (diff)
- Marcar versiones finales reutilizables
- Organizar prompts por estado, etiquetas y fecha

---

## Flujo principal de usuario

### 1. Creación inicial

- El usuario ingresa un prompt inicial desde el dashboard.
- El sistema crea un **draft** persistente.
- Se redirige automáticamente a la vista de refinamiento.

### 2. Refinamiento guiado

- El prompt se mejora respondiendo preguntas estructuradas:
  - Rol
  - Contexto
  - Objetivo
  - Restricciones
  - Formato de salida
  - Ejemplos
- Cada iteración genera una nueva **versión** del prompt.
- El usuario puede guardar, seguir refinando o generar nuevas versiones.

### 3. Versionado

- Cada prompt tiene múltiples versiones con estados:
  - Draft
  - Analyzed
  - Final
- Una versión puede marcarse explícitamente como **Final**.

### 4. Visualización

Vista de lectura (`view`) con:

- Última versión activa
- Estado
- Fecha de actualización
- Tags
- Prompt original
- Prompt mejorado con opción de copiar

### 5. Comparación

Comparador de versiones inspirado en GitHub:

- Vista split o inline
- Diferencias resaltadas (agregados / eliminados)
- Selector de versiones a comparar

### 6. Gestión desde el sidebar

- Listado paginado de prompts
- Filtros por estado
- Búsqueda por texto (título, contenido, tags)
- Acceso rápido a:
  - Ver
  - Refinar
  - Eliminar (con confirmación)

---

## Recursos adicionales

Sección separada del flujo principal:

- **Templates**  
  Plantillas reutilizables que cargan un prompt base y continúan el flujo normal.

- **Blog**  
  Artículos orientados a SEO, con listado y detalle.

- **Guías y manuales**
  - Guía para escribir mejores prompts
  - Manual de uso del sitio

---

## Arquitectura frontend

- **Framework:** Next.js (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS

### Estado y UI

- Estado local por vista
- Contextos React para:
  - Modales
  - Toasts
  - UI transversal

### Layouts

Separación por grupos de rutas:

- `(dashboard)` → con sidebar
- `(auth)` → sin sidebar
- `(resources)` → recursos y blog

Esto permite URLs limpias, layouts reutilizables y separación clara de responsabilidades.

---

## Backend (planeado)

El frontend está diseñado para conectarse a una **API REST en Python**, responsable de:

- Persistencia de prompts y versiones
- Lógica de estados
- Orquestación de llamadas a modelos de lenguaje
- Métricas de uso

### Persistencia

- **Supabase**
  - Autenticación (OAuth / email)
  - Base de datos PostgreSQL

### IA

- **Groq**
  - Generación de prompts mejorados
  - Análisis y refinamiento
  - Baja latencia

---

## Estado del proyecto

- ✔️ Flujos principales definidos
- ✔️ Arquitectura de layouts clara
- ✔️ UI preparada para integración backend
- ⏳ API y persistencia real pendientes

---

## Filosofía

Prompt Lab no busca ser un “chat con IA”, sino una **herramienta de trabajo**:

- Menos magia
- Más control
- Más trazabilidad
- Más reutilización

Pensado para equipos y usuarios que trabajan seriamente con modelos de lenguaje.
