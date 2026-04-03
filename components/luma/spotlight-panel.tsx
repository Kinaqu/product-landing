"use client";

import { useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

type SpotlightPanelProps = {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
};

export function SpotlightPanel({
  children,
  className = "",
  spotlightColor = "rgba(233, 196, 147, 0.26)",
}: SpotlightPanelProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const updatePosition = (clientX: number, clientY: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPosition({
      x: clientX - rect.left,
      y: clientY - rect.top,
    });
  };

  return (
    <div
      ref={ref}
      className={`spotlight-panel ${className}`.trim()}
      onPointerEnter={(event) => {
        updatePosition(event.clientX, event.clientY);
        setOpacity(1);
      }}
      onPointerMove={(event) => updatePosition(event.clientX, event.clientY)}
      onPointerLeave={() => setOpacity(0)}
      style={
        {
          "--spotlight-x": `${position.x}px`,
          "--spotlight-y": `${position.y}px`,
          "--spotlight-opacity": opacity,
          "--spotlight-color": spotlightColor,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
