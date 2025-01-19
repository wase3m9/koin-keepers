import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particles: Particle[] = [];
  const numParticles = 100;
  const connectionDistance = 150;

  useEffect(() => {
    if (!containerRef.current) return;

    const sketch = (p: p5) => {
      p.setup = () => {
        const canvas = p.createCanvas(window.innerWidth, window.innerHeight);
        canvas.position(0, 0);
        canvas.style('z-index', '-1');

        // Initialize particles
        for (let i = 0; i < numParticles; i++) {
          particles.push({
            x: p.random(p.width),
            y: p.random(p.height),
            vx: p.random(-1, 1),
            vy: p.random(-1, 1)
          });
        }
      };

      p.draw = () => {
        p.clear();
        p.background(26, 31, 44, 240); // Dark background #1A1F2C with alpha
        
        // Update and draw particles
        for (let i = 0; i < particles.length; i++) {
          const particle = particles[i];

          // Move towards mouse when nearby
          const mouseInfluenceDistance = 200;
          const dx = p.mouseX - particle.x;
          const dy = p.mouseY - particle.y;
          const distance = p.sqrt(dx * dx + dy * dy);

          if (distance < mouseInfluenceDistance) {
            const influence = (mouseInfluenceDistance - distance) / mouseInfluenceDistance;
            particle.vx += (dx / distance) * influence * 0.5;
            particle.vy += (dy / distance) * influence * 0.5;
          }

          // Update position
          particle.x += particle.vx;
          particle.y += particle.vy;

          // Add some randomness to movement
          particle.vx += p.random(-0.1, 0.1);
          particle.vy += p.random(-0.1, 0.1);

          // Dampen velocity
          particle.vx *= 0.99;
          particle.vy *= 0.99;

          // Wrap around edges
          if (particle.x < 0) particle.x = p.width;
          if (particle.x > p.width) particle.x = 0;
          if (particle.y < 0) particle.y = p.height;
          if (particle.y > p.height) particle.y = 0;

          // Draw particle with higher opacity
          p.fill(255, 255, 255, 180); // Increased opacity from 50 to 180
          p.noStroke();
          p.ellipse(particle.x, particle.y, 4, 4);

          // Draw connections with higher opacity
          for (let j = i + 1; j < particles.length; j++) {
            const other = particles[j];
            const dx = other.x - particle.x;
            const dy = other.y - particle.y;
            const distance = p.sqrt(dx * dx + dy * dy);

            if (distance < connectionDistance) {
              const alpha = p.map(distance, 0, connectionDistance, 255, 0);
              p.stroke(255, 255, 255, alpha * 0.8); // Increased opacity multiplier from 0.5 to 0.8
              p.line(particle.x, particle.y, other.x, other.y);
            }
          }
        }
      };

      p.windowResized = () => {
        p.resizeCanvas(window.innerWidth, window.innerHeight);
      };
    };

    const p5Instance = new p5(sketch, containerRef.current);

    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 -z-10" />;
};

export default ParticleBackground;