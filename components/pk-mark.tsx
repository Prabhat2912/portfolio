// Original "PK" monogram — geometric monoline mark for this portfolio.
// Same role as the reference's block-letter mark, but drawn from scratch:
// two letterforms on a shared baseline, crisp at any size.
export function PkMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 56 40"
      aria-hidden
      {...props}
    >
      <g
        stroke="currentColor"
        strokeWidth="5.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      >
        {/* P */}
        <path d="M10 5v30" />
        <path d="M10 5h10a8.5 8.5 0 0 1 0 17H10" />
        {/* K */}
        <path d="M35 5v30" />
        <path d="M50 5 35 19.5" />
        <path d="M39 23.5l12 11.5" />
      </g>
    </svg>
  );
}

export function getPkMarkSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 56 40"><g stroke="currentColor" stroke-width="5.5" stroke-linecap="square" stroke-linejoin="round"><path d="M10 5v30"/><path d="M10 5h10a8.5 8.5 0 0 1 0 17H10"/><path d="M35 5v30"/><path d="M50 5 35 19.5"/><path d="M39 23.5l12 11.5"/></g></svg>`;
}
