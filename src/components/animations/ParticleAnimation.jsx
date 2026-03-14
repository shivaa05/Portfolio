import { useRef, useEffect } from "react";

export default function ParticleAnimation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    let particleCount;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // responsive particle count
      if (window.innerWidth < 640) {
        particleCount = 30; // mobile
      } else if (window.innerWidth < 1024) {
        particleCount = 40; // tablet
      } else {
        particleCount = 70; // desktop
      }

      initParticles();
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.radius = Math.random() * 2 + 2;

        this.vx = (Math.random() - 0.5) * .3;
        this.vy = (Math.random() - 0.5) * 0.3;

        this.alpha = Math.random() * 0.8 + 0.25;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

        ctx.fillStyle = `rgba(168,85,247,${this.alpha})`;

        ctx.shadowColor = "#a855f7";
        ctx.shadowBlur = 10;

        ctx.fill();
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        this.draw();
      }
    }

    const initParticles = () => {
      particles = [];

      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => p.update());

      requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);

    return () => window.removeEventListener("resize", resizeCanvas);
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
        zIndex: 1,
      }}
    />
  );
}
