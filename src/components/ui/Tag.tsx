export function Tag({ label, color }: { label: string; color?: string }) {
  return (
    <span
      className="font-display text-xs font-medium tracking-wide uppercase"
      style={{
        padding: "6px 12px",
        borderRadius: "999px",
        background: color ? `${color}18` : "rgba(167,139,250,0.12)",
        border: `1px solid ${color ? `${color}30` : "rgba(167,139,250,0.25)"}`,
        color: color ?? "#A78BFA",
        letterSpacing: "0.06em",
      }}
    >
      {label}
    </span>
  );
}
