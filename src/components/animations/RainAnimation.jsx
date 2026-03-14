import { useEffect, useRef } from "react";

const RainAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const dropCount = 33;
    let drops = [];

    for (let i = 0; i < dropCount; i++) {
      drops.push({
        x: Math.random() * width,
        y: Math.random() * height,
        length: Math.random() * 20 + 50,
        speed: Math.random() + 1.4,
        angle: Math.random() * 0.5 , // controls tilt
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      drops.forEach((drop) => {
        const endX = drop.x + drop.angle * drop.length;
        const endY = drop.y + drop.length;

        // gradient fade
        const gradient = ctx.createLinearGradient(drop.x, drop.y, endX, endY);

        gradient.addColorStop(0, "rgba(200,200,255,0)");
        gradient.addColorStop(1, "rgba(100,130,200,0.4)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();

        // movement
        drop.y += drop.speed;
        drop.x += drop.angle - 0.05;

        // reset drop
        if (drop.y > height) {
          drop.y = 0;
          drop.x = Math.random() * width;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    let animationFrameId = requestAnimationFrame(draw);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 1,
      }}
    />
  );
};

export default RainAnimation;
