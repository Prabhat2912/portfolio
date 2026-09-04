// Original verified badge — filled disc, background-colored check, hairline ring.
export function VerifiedIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <circle
        cx="12"
        cy="12"
        r="10"
        fill="none"
        stroke="var(--background)"
        strokeOpacity="0.35"
        strokeWidth="1.5"
      />
      <path
        d="m8 12.5 2.6 2.6L16.2 9.3"
        fill="none"
        stroke="var(--background)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
