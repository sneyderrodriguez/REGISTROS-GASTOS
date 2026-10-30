# 💰 Registro de Gastos

> Aplicación web para registrar y organizar gastos personales, consultar los totales del día y del mes y conocer cuánto se ha gastado por categoría.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)

---

## 📌 Sobre el proyecto

**Registro de Gastos** es una aplicación web sencilla para llevar un control básico de los gastos personales. Permite agregar una descripción, un monto y una categoría para cada gasto, y presenta automáticamente resúmenes de la información registrada.

Los datos se almacenan en el navegador mediante `localStorage`, por lo que permanecen disponibles al recargar la página en el mismo navegador, mientras no se borren sus datos locales. No requiere backend ni base de datos externa.

---

## ✨ Características principales

- ➕ Registro de gastos con descripción, monto y categoría.
- 🗂️ Cinco categorías disponibles: **Comida, Transporte, Entretenimiento, Servicios y Otros**.
- 📅 Cálculo automático del total gastado **hoy** y durante el **mes actual**.
- 📊 Resumen acumulado de gastos por categoría.
- 📋 Lista de gastos registrados con su descripción, categoría y monto.
- 🗑️ Eliminación de gastos con confirmación previa.
- 💾 Persistencia de datos con `localStorage`.
- ⚠️ Validación básica para evitar descripciones vacías y montos no positivos.

---

## 🧰 Tecnologías utilizadas

- **HTML5:** estructura de la interfaz.
- **CSS3:** presentación visual y estilos.
- **JavaScript:** registro, cálculos, actualización de la pantalla y eliminación de gastos.
- **LocalStorage:** almacenamiento de los registros en el navegador.
- **Google Fonts:** tipografías Akaya Kanadaka, Lato y Amaranth.

---

## 📁 Estructura del proyecto

```text
REGISTROS-GASTOS/
├── index.html    # Interfaz y formulario
├── styles.css    # Estilos visuales
├── script.js     # Lógica y almacenamiento de gastos
└── README.md     # Documentación del proyecto
```

> `README.md` es el archivo de documentación propuesto; los otros tres archivos están presentes en el proyecto original.

---

## 🖥️ Ejecutar el proyecto localmente

No es necesario instalar dependencias ni configurar un servidor.

### 1. Obtener el proyecto

Descarga y descomprime el proyecto o clona su repositorio, si lo tienes publicado.

### 2. Abrir la carpeta

```text
REGISTROS-GASTOS/
```

### 3. Ejecutar

Abre `index.html` en tu navegador. También puedes usar la extensión **Live Server** de Visual Studio Code.

---

## 🚀 Cómo utilizarlo

1. Selecciona la categoría del gasto.
2. Escribe una descripción y un monto mayor que cero.
3. Pulsa **Agregar Gasto**.
4. Consulta los totales del día, del mes y por categoría, así como la lista de registros.
5. Para borrar un registro, pulsa **Eliminar** y confirma la acción.

Cada gasto se guarda con la fecha y hora de su creación. Los totales del día y del mes se calculan a partir de esas fechas; los acumulados por categoría incluyen todos los gastos guardados.

---

## 💾 Almacenamiento de datos

La aplicación guarda un arreglo de gastos bajo la clave `gastos` de `localStorage`. Cada registro tiene esta estructura:

```json
{
  "descripcion": "Almuerzo",
  "monto": 18000,
  "categoria": "Comida",
  "fecha": "2026-10-22T17:30:00.000Z"
}
```

La fecha del ejemplo es ilustrativa. Los datos se almacenan únicamente en el navegador utilizado; no se sincronizan entre dispositivos.

---

## 🔧 Posibles mejoras

- Formatear los montos como moneda.
- Incorporar filtros por fecha y categoría.
- Permitir editar registros existentes.
- Añadir gráficos para visualizar la distribución de los gastos.
- Reforzar la validación de entradas y la presentación segura de las descripciones.
- Permitir exportar los registros a CSV.

> Estas son ideas para futuras versiones, no funcionalidades implementadas actualmente.

---

## 👨‍💻 Autor

**Sneyder Rodríguez — Full-Stack Java Developer**

- [GitHub](https://github.com/SneyderRodriguez)
- [LinkedIn](https://www.linkedin.com/in/sneyder-rodriguez-ingeniero-de-sistemas/)
- [Portafolio](https://sneyderrodriguez.netlify.app/)

---

## 📄 Licencia

Este proyecto está disponible bajo la licencia **MIT**.

Puedes utilizar, modificar y distribuir el código respetando los términos establecidos en dicha licencia.
