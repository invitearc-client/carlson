"use client";

export default function FloatingPetal({
  className,
  style
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  const petalValues = {
    duration: 30,
    delay: 0,
    scale: 0.7,
    rotate: 180,
  };


  return (
    <img
      src="/assets/flower_petals.webp"
      alt="petal"
      className={`floating-petal ${className}`}
      style={{
        animationDuration: `${petalValues.duration}s`,
        animationDelay: `${petalValues.delay}s`,
        "--scale": petalValues.scale,
        "--rotate": `${petalValues.rotate}deg`,
        ...style
      } as React.CSSProperties}
    />
  );
}