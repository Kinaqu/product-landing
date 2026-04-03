"use client";

import type { CSSProperties } from "react";

type LightRaysProps = {
  className?: string;
};

const rays = [
  { left: "14%", width: "12rem", rotation: "-18deg", delay: "0s", duration: "16s", opacity: 0.24 },
  { left: "30%", width: "10rem", rotation: "-10deg", delay: "2.4s", duration: "18s", opacity: 0.18 },
  { left: "48%", width: "14rem", rotation: "0deg", delay: "1.2s", duration: "17s", opacity: 0.3 },
  { left: "66%", width: "11rem", rotation: "12deg", delay: "3.6s", duration: "19s", opacity: 0.18 },
  { left: "82%", width: "13rem", rotation: "20deg", delay: "0.8s", duration: "15s", opacity: 0.22 },
];

export function LightRays({ className = "" }: LightRaysProps) {
  return (
    <div className={`light-rays ${className}`.trim()} aria-hidden="true">
      {rays.map((ray, index) => (
        <span
          key={`${ray.left}-${index}`}
          className="light-rays__ray"
          style={
            {
              left: ray.left,
              width: ray.width,
              "--rotate": ray.rotation,
              "--ray-opacity": ray.opacity,
              animationDelay: ray.delay,
              animationDuration: ray.duration,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
