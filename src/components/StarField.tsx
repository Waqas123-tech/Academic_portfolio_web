import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      const stars: Star[] = [];
      const numStars = Math.floor((canvas.width * canvas.height) / 8000);
      
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.02 + 0.01,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }
      starsRef.current = stars;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = (time: number) => {
      ctx.fillStyle = '#0B0D17';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach((star) => {
        // Twinkle effect
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinklePhase);
        const currentOpacity = star.opacity * (0.7 + 0.3 * twinkle);

        // Subtle parallax based on mouse position
        const parallaxX = (mouseRef.current.x - canvas.width / 2) * star.speed * 0.5;
        const parallaxY = (mouseRef.current.y - canvas.height / 2) * star.speed * 0.5;

        // Draw star with glow
        const gradient = ctx.createRadialGradient(
          star.x - parallaxX,
          star.y - parallaxY,
          0,
          star.x - parallaxX,
          star.y - parallaxY,
          star.size * 3
        );
        gradient.addColorStop(0, `rgba(224, 230, 241, ${currentOpacity})`);
        gradient.addColorStop(0.4, `rgba(224, 230, 241, ${currentOpacity * 0.3})`);
        gradient.addColorStop(1, 'rgba(224, 230, 241, 0)');

        ctx.beginPath();
        ctx.arc(star.x - parallaxX, star.y - parallaxY, star.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(star.x - parallaxX, star.y - parallaxY, star.size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`;
        ctx.fill();
      });

      // Draw constellation lines between nearby stars
      ctx.strokeStyle = 'rgba(42, 48, 80, 0.15)';
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < starsRef.current.length; i++) {
        for (let j = i + 1; j < starsRef.current.length; j++) {
          const star1 = starsRef.current[i];
          const star2 = starsRef.current[j];
          const dx = star1.x - star2.x;
          const dy = star1.y - star2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(star1.x, star1.y);
            ctx.lineTo(star2.x, star2.y);
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default StarField;
