# Landings de negocios locales

Proyecto para crear páginas web (landing pages) de negocios locales.
Una sola base reusable; cada negocio es **un solo archivo de datos**.

---

## 🟢 Ver las páginas en tu computadora

En la terminal, dentro de esta carpeta:

```bash
npm run dev
```

Abre el link que aparece (normalmente http://localhost:3000).

- `http://localhost:3000` → lista de todos los negocios
- `http://localhost:3000/cafe-aurora` → landing del negocio de ejemplo

Para detenerlo: `Ctrl + C` en la terminal.

---

## ➕ Agregar un negocio nuevo

1. Entra a la carpeta `src/businesses/`.
2. Copia el archivo `_TEMPLATE.ts` y renómbralo, ej: `tacos-don-pepe.ts`.
3. Abre tu copia y llena los datos (nombre, colores, fotos, contacto…).
   - Cambia también la línea `export const templateBusiness` por algo único,
     ej: `export const tacosDonPepe`.
4. Abre `src/businesses/registry.ts` y:
   - Arriba, agrega: `import { tacosDonPepe } from "./tacos-don-pepe";`
   - En la lista `businesses`, agrega `tacosDonPepe,`
5. Listo. La página queda en `/tacos-don-pepe`.

> Tip: usa `src/businesses/cafe-aurora.ts` como ejemplo ya lleno.

### Fotos

Dos opciones:
- Pega una **URL https** de la foto directamente, o
- Pon el archivo en la carpeta `public/` y úsalo como `/mi-foto.jpg`.

---

## 🚀 Publicar en internet (Vercel)

1. Sube el proyecto a GitHub (yo te ayudo con esto).
2. Entra a [vercel.com](https://vercel.com), conéctalo con tu GitHub e importa el repo.
3. Vercel publica solo. Cada vez que cambiemos algo y lo subamos, se actualiza automático.
4. Cada negocio tendrá su link; luego se le puede poner su propio dominio.

---

## 📂 Qué hay en cada parte (referencia rápida)

| Carpeta / archivo | Para qué |
|---|---|
| `src/businesses/` | Los datos de cada negocio (lo que más vas a tocar) |
| `src/businesses/_TEMPLATE.ts` | Plantilla para copiar |
| `src/businesses/registry.ts` | Lista de negocios activos |
| `src/components/Landing.tsx` | El diseño de la página (no hace falta tocarlo) |
| `src/app/[slug]/page.tsx` | Conecta cada negocio con su URL |
| `src/app/page.tsx` | Lista interna de negocios |
