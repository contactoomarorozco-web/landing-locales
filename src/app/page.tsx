import Link from "next/link";
import { businesses } from "@/businesses/registry";

// Página de inicio: lista interna de las landings publicadas.
// (Esta página es para ti, no para los clientes finales.)
export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-bold">Landings de negocios locales</h1>
      <p className="mt-3 text-neutral-600">
        Estas son las páginas publicadas. Cada negocio tiene su propio enlace.
      </p>
      <ul className="mt-10 space-y-3">
        {businesses.map((b) => (
          <li key={b.slug}>
            <Link
              href={`/${b.slug}`}
              className="flex items-center justify-between rounded-xl border border-neutral-200 px-5 py-4 hover:border-neutral-400 transition-colors"
            >
              <span>
                <span className="font-semibold">{b.name}</span>
                <span className="text-neutral-500"> · {b.category}</span>
              </span>
              <span className="text-neutral-400 text-sm">/{b.slug} →</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
