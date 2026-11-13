# Calculadora de Propinas y Consumo

Aplicación web para registrar el consumo de una mesa, calcular subtotal, propina y total a pagar. Este proyecto nace del curso **"React y TypeScript - La Guía Completa Creando +10 Proyectos"** y se utiliza como punto de partida para **reafirmar y actualizar conocimientos en el stack PERN y MERN**.

## Propósito

Más que un ejercicio aislado, este repositorio funciona como un laboratorio de práctica:

- **Reafirmar fundamentos** de React y TypeScript vistos en el curso.
- **Actualizar el stack** a versiones recientes (React 19, Vite 8, Tailwind CSS 4, TypeScript 6).
- **Evolucionar hacia PERN/MERN**: el frontend actual está pensado para conectarse después a un backend con **Node.js + Express** y base de datos **PostgreSQL (PERN)** o **MongoDB (MERN)**.

> Estado actual: aplicación **solo frontend**. Los datos del menú están en memoria y el pedido se maneja con estado local. La persistencia en base de datos es el siguiente paso del roadmap.

## Funcionalidades

- Menú de platillos y bebidas con su precio.
- Agregar productos al pedido; si ya existe, incrementa su cantidad.
- Eliminar productos del pedido.
- Selección de propina: 10 %, 20 % o 50 %.
- Cálculo automático de **subtotal**, **propina** y **total**.
- Botón para guardar/cerrar la orden, reiniciando el estado.
- Interfaz responsive con Tailwind CSS.

## Stack

| Área | Tecnología |
| --- | --- |
| UI | React 19 |
| Lenguaje | TypeScript 6 |
| Build / Dev server | Vite 8 |
| Estilos | Tailwind CSS 4 (`@tailwindcss/vite`) |
| Linter | ESLint 10 + typescript-eslint |

### Objetivo de aprendizaje (roadmap)

| Stack | Componentes |
| --- | --- |
| **PERN** | PostgreSQL · Express · React · Node.js |
| **MERN** | MongoDB · Express · React · Node.js |

## Estructura del proyecto

```
src/
├── components/
│   ├── MenuItem.tsx            # Botón de cada producto del menú
│   ├── OrderContents.tsx       # Listado del pedido y eliminación de ítems
│   ├── orderTotals.tsx         # Subtotal, propina, total y guardar orden
│   └── TipPorcentageForm.tsx   # Selector de porcentaje de propina
├── data/
│   └── db.ts                   # Menú y opciones de propina (datos de ejemplo)
├── helpers/
│   └── index.ts                # formatCurrency con Intl.NumberFormat
├── hooks/
│   └── useOrder.ts             # Hook previo al reducer (en desuso, pendiente de eliminar)
├── reducers/
│   └── order-reducer.ts        # Estado del pedido, acciones y transiciones
├── types/
│   └── index.ts                # TMenuItem, TOrderItem, TTipOption
├── App.tsx                     # Composición de la pantalla
├── main.tsx                    # Punto de entrada
└── index.css                   # Tailwind CSS
```

## Cómo ejecutar

Requisitos: **Node.js 20+** y npm.

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo con HMR
npm run dev

# Compilar para producción
npm run build

# Previsualizar la compilación
npm run preview

# Ejecutar ESLint
npm run lint
```

## Modelo de datos

```ts
type TMenuItem = {
  id: number;
  name: string;
  price: number;
};

type TOrderItem = TMenuItem & {
  quantity: number;
};

type TTipOption = {
  id: string;
  value: number;
  label: string;
};
```

## Decisiones de implementación

- **Estado con `useReducer`:** `App` mantiene `{ order, tip }` y `dispatch`; `reducers/order-reducer.ts` concentra las transiciones (`add-item`, `remove-item`, `add-tip`, `place-order`) y los componentes solo emiten acciones.
- **Acciones tipadas:** `TOrderAcctions` es una unión discriminada por `type`, así TypeScript valida el `payload` en cada llamada a `dispatch`.
- **`place-order` reinicia a `initialState`:** cerrar la orden limpia pedido y propina en una sola transición.
- **Cálculos derivados en la vista:** subtotal, propina y total se calculan con `useMemo` a partir de `order` y `tip`; no se guardan en el estado.

## Próximos pasos

- [ ] Persistir el menú y las órdenes en una base de datos.
- [ ] Construir la API REST con Express.
- [ ] Implementar el backend en PostgreSQL (PERN) y/o MongoDB (MERN).
- [ ] Añadir autenticación y manejo de mesas/usuarios.
- [ ] Incorporar pruebas automatizadas.

## Créditos

Proyecto basado en el curso **"React y TypeScript - La Guía Completa Creando +10 Proyectos"**, adaptado y actualizado como práctica personal de PERN y MERN.
