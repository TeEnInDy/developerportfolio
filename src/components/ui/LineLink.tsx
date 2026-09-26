import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { profile } from "@/data/profile";

/** Link to the owner's LINE profile, prefixed with the LINE app icon. */
export function LineLink({
  iconSize = 18,
  className = "",
  style,
  children = "LINE",
}: {
  iconSize?: number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}) {
  return (
    <a
      href={profile.lineUrl}
      target="_blank"
      rel="noreferrer"
      className={className}
      style={{ display: "inline-flex", alignItems: "center", gap: "8px", ...style }}
    >
      <Image src="/images/LINEIcon.png" alt="" width={iconSize} height={iconSize} style={{ borderRadius: iconSize * 0.22 }} />
      {children}
    </a>
  );
}
