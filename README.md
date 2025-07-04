
# Million Real Estate Frontend

Frontend del reto técnico para Million Luxury.

## 🛠️ Tecnologías usadas

- React + Vite
- TailwindCSS
- Axios
- React Router DOM

## 📦 Instalación

```bash
npm install
```

## 🚀 Ejecutar proyecto

```bash
npm run dev
```

La app se abrirá en `http://localhost:5173`.

## 📁 Estructura del proyecto

```
src/
├── assets/
├── components/
├── features/
│   └── properties/
│       ├── components/
│       ├── pages/
│       └── services/
├── hooks/
├── routes/
├── styles/
├── App.jsx
└── main.jsx
```

## 📱 Responsive

El diseño es 100% responsive. Los filtros están adaptados con menú hamburguesa en dispositivos menores a 640px.

## 🧪 Consideraciones

- El backend debe estar corriendo en `http://localhost:7200` para que carguen las imágenes y propiedades correctamente.
- Las imágenes están organizadas por propiedad en `/PropertyImages/fecha/...`.

## ✅ Estado

Proyecto funcional con:

- Filtros dinámicos
- Cards adaptables
- Visualización de detalles
- Carga de trazabilidad (traces)
