// LISTA DE NEGOCIOS ACTIVOS
//
// Para agregar un negocio nuevo:
//   1. import { miNegocio } from "./mi-negocio";   (arriba, con los demás imports)
//   2. Añádelo a la lista "businesses" de abajo.
// Eso es todo: su landing queda en tusitio.com/<slug>

import type { Business } from "./types";
import { cafeAurora } from "./cafe-aurora";

export const businesses: Business[] = [
  cafeAurora,
  // <-- agrega aquí los negocios nuevos
];

// --- No necesitas tocar nada de aquí para abajo ---

export function getBusiness(slug: string): Business | undefined {
  return businesses.find((b) => b.slug === slug);
}

export function allSlugs(): string[] {
  return businesses.map((b) => b.slug);
}
