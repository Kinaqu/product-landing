type LampSceneProps = {
  variant?: "hero" | "detail" | "mini";
  tone?: "warm" | "neutral" | "evening";
  label: string;
};

export function LampScene({
  variant = "hero",
  tone = "warm",
  label,
}: LampSceneProps) {
  return (
    <div
      className={`lamp-scene lamp-scene--${variant} lamp-scene--${tone}`}
      role="img"
      aria-label={label}
    >
      <div className="lamp-scene__grain" />
      <div className="lamp-scene__halo lamp-scene__halo--wide" />
      <div className="lamp-scene__halo lamp-scene__halo--inner" />
      <div className="lamp-scene__platform" />
      <div className="lamp-scene__shadow" />
      <div className="lamp">
        <div className="lamp__beam" />
        <div className="lamp__glow" />
        <div className="lamp__head" />
        <div className="lamp__arm lamp__arm--top" />
        <div className="lamp__arm lamp__arm--bottom" />
        <div className="lamp__joint lamp__joint--top" />
        <div className="lamp__joint lamp__joint--bottom" />
        <div className="lamp__stem" />
        <div className="lamp__base" />
      </div>
    </div>
  );
}
