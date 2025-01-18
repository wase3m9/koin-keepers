import React, { useEffect, useRef } from 'react';

const NetworkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Hexagon class
    class Hexagon {
      x: number;
      y: number;
      size: number;
      angle: number;
      pulsePhase: number;
      glowIntensity: number;

      constructor(x: number, y: number, size: number) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.angle = 0;
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.glowIntensity = Math.random() * 0.5 + 0.5;
      }

      draw(ctx: CanvasRenderingContext2D, time: number) {
        const pulse = Math.sin(time * 0.001 + this.pulsePhase) * 0.2 + 0.8;
        const size = this.size * pulse;
        
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (i * Math.PI) / 3 + this.angle;
          const x = this.x + size * Math.cos(angle);
          const y = this.y + size * Math.sin(angle);
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.closePath();
        
        // Create gradient for glow effect
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, size * 2
        );
        const alpha = 0.1 * this.glowIntensity * pulse;
        gradient.addColorStop(0, `rgba(0, 255, 200, ${alpha})`);
        gradient.addColorStop(1, 'rgba(0, 255, 200, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fill();
        
        ctx.strokeStyle = `rgba(0, 255, 200, ${0.3 * pulse})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    }

    // Create hexagon grid
    const hexagons: Hexagon[] = [];
    const hexSize = 50;
    const horizontalSpacing = hexSize * Math.sqrt(3);
    const verticalSpacing = hexSize * 1.5;
    
    for (let row = 0; row < canvas.height / verticalSpacing + 2; row++) {
      for (let col = 0; col < canvas.width / horizontalSpacing + 2; col++) {
        const x = col * horizontalSpacing + (row % 2) * (horizontalSpacing / 2);
        const y = row * verticalSpacing;
        hexagons.push(new Hexagon(x, y, hexSize));
      }
    }

    // Animation loop
    let animationFrame: number;
    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw hexagons
      hexagons.forEach(hexagon => {
        hexagon.draw(ctx, time);
      });

      // Draw connecting lines
      hexagons.forEach((hex1, i) => {
        hexagons.slice(i + 1).forEach(hex2 => {
          const dx = hex1.x - hex2.x;
          const dy = hex1.y - hex2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < hexSize * 3) {
            const alpha = (1 - distance / (hexSize * 3)) * 0.15;
            ctx.beginPath();
            ctx.moveTo(hex1.x, hex1.y);
            ctx.lineTo(hex2.x, hex2.y);
            ctx.strokeStyle = `rgba(0, 255, 200, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: 'transparent' }}
    />
  );
};

export default NetworkBackground;