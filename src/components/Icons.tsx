// Set de iconos editoriales — trazo fino, currentColor, sin relleno.
// Mismo lenguaje visual que el ✦, el arco y la tipografía serif del sitio.

type IconProps = { className?: string; style?: React.CSSProperties };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconPin({ className, style }: IconProps) {
  return (
    <svg {...base} className={className} style={style} aria-hidden>
      <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function IconPhone({ className, style }: IconProps) {
  return (
    <svg {...base} className={className} style={style} aria-hidden>
      <path d="M6.5 3.5h3l1.6 4-2 1.4a11 11 0 0 0 5 5l1.4-2 4 1.6v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5Z" />
    </svg>
  );
}

export function IconMail({ className, style }: IconProps) {
  return (
    <svg {...base} className={className} style={style} aria-hidden>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4.5 7 7.5 5.5L19.5 7" />
    </svg>
  );
}

export function IconClock({ className, style }: IconProps) {
  return (
    <svg {...base} className={className} style={style} aria-hidden>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function IconCat({ className, style }: IconProps) {
  return (
    <svg
      viewBox="0 0 256 256"
      fill="currentColor"
      className={className}
      style={style}
      aria-hidden
    >
      <path d="M96,140a12,12,0,1,1-12-12A12,12,0,0,1,96,140Zm76-12a12,12,0,1,0,12,12A12,12,0,0,0,172,128Zm60-80v88c0,52.93-46.65,96-104,96S24,188.93,24,136V48A16,16,0,0,1,51.31,36.69c.14.14.26.27.38.41L69,57a111.22,111.22,0,0,1,118.1,0l17.31-19.9c.12-.14.24-.27.38-.41A16,16,0,0,1,232,48Zm-16,0-21.56,24.8A8,8,0,0,1,183.63,74,88.86,88.86,0,0,0,168,64.75V88a8,8,0,0,1-16,0V59.05a97.43,97.43,0,0,0-16-2.72V88a8,8,0,0,1-16,0V56.33a97.43,97.43,0,0,0-16,2.72V88a8,8,0,0,1-16,0V64.75A88.86,88.86,0,0,0,72.37,74a8,8,0,0,1-10.81-1.17L40,48v88c0,41.66,35.21,76,80,79.67V195.31l-13.66-13.66a8,8,0,0,1,11.32-11.31L128,180.68l10.34-10.34a8,8,0,0,1,11.32,11.31L136,195.31v20.36c44.79-3.69,80-38,80-79.67Z" />
    </svg>
  );
}

export function IconSeal({ className, style }: IconProps) {
  return (
    <svg {...base} className={className} style={style} aria-hidden>
      <path d="M12 2.6l2.1 1.5 2.5-.5 1 2.4 2.3 1.1-.4 2.5 1.6 2-1.6 2 .4 2.5-2.3 1.1-1 2.4-2.5-.5L12 21.4l-2.1-1.5-2.5.5-1-2.4-2.3-1.1.4-2.5-1.6-2 1.6-2-.4-2.5 2.3-1.1 1-2.4 2.5.5Z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </svg>
  );
}

export function IconStar({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style} aria-hidden>
      <path d="M12 2.5l2.9 5.9 6.5.95-4.7 4.58 1.1 6.47L12 17.4l-5.8 3 1.1-6.47L2.6 9.35l6.5-.95L12 2.5Z" />
    </svg>
  );
}

export function IconCheck({ className, style }: IconProps) {
  return (
    <svg {...base} className={className} style={style} aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.2 12.2 2.6 2.6 5-5.4" />
    </svg>
  );
}

export function IconSparkle({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style} aria-hidden>
      <path d="M12 2c.5 4.5 2.5 6.5 8 7.5-5.5 1-7.5 3-8 8-.5-5-2.5-7-8-8 5.5-1 7.5-3 8-7.5Z" />
    </svg>
  );
}
