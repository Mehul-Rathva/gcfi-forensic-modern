import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  pulse: number;
}

const ParticleNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<{ x: number; y: number; hover: boolean }>({
    x: 0,
    y: 0,
    hover: false
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 8000);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.3,
          pulse: Math.random() * Math.PI * 2
        });
      }
      
      particlesRef.current = particles;
    };

    const drawParticle = (particle: Particle, time: number) => {
      const pulseFactor = Math.sin(time * 0.002 + particle.pulse) * 0.3 + 0.7;
      const currentRadius = particle.radius * pulseFactor;
      
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, currentRadius, 0, Math.PI * 2);
      
      // Create glowing effect
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, currentRadius * 3
      );
      gradient.addColorStop(0, `rgba(244, 91, 42, ${particle.opacity * pulseFactor})`);
      gradient.addColorStop(0.5, `rgba(244, 91, 42, ${particle.opacity * 0.5 * pulseFactor})`);
      gradient.addColorStop(1, 'rgba(244, 91, 42, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Core particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, currentRadius * 0.4, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(244, 91, 42, ${particle.opacity})`;
      ctx.fill();
    };

    const drawConnection = (p1: Particle, p2: Particle, distance: number, maxDistance: number) => {
      const baseOpacity = mouseRef.current.hover ? 0.6 : 0.4;
      const alpha = (1 - distance / maxDistance) * baseOpacity;
      
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      
      // Create gradient line
      const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
      gradient.addColorStop(0, `rgba(244, 91, 42, ${alpha})`);
      gradient.addColorStop(0.5, `rgba(255, 122, 77, ${alpha * 1.2})`);
      gradient.addColorStop(1, `rgba(244, 91, 42, ${alpha})`);
      
      ctx.strokeStyle = gradient;
      ctx.lineWidth = mouseRef.current.hover ? 2 : 1.5;
      ctx.stroke();
    };

    const updateParticles = () => {
      particlesRef.current.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges with some randomness
        if (particle.x <= 0 || particle.x >= canvas.width) {
          particle.vx = -particle.vx * (0.8 + Math.random() * 0.4);
        }
        if (particle.y <= 0 || particle.y >= canvas.height) {
          particle.vy = -particle.vy * (0.8 + Math.random() * 0.4);
        }

        // Keep particles within bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        
        // Slowly vary opacity
        particle.opacity += (Math.random() - 0.5) * 0.01;
        particle.opacity = Math.max(0.2, Math.min(1, particle.opacity));
      });
    };

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      updateParticles();
      
      const particles = particlesRef.current;
      const maxDistance = mouseRef.current.hover ? 160 : 120;

      // Draw connections first
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            drawConnection(particles[i], particles[j], distance, maxDistance);
          }
        }

        // Connect to mouse if hovering
        if (mouseRef.current.hover) {
          const dx = particles[i].x - mouseRef.current.x;
          const dy = particles[i].y - mouseRef.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            
            const alpha = (1 - distance / 150) * 0.8;
            ctx.strokeStyle = `rgba(244, 91, 42, ${alpha})`;
            ctx.lineWidth = 2.5;
            ctx.stroke();
          }
        }
      }

      // Draw particles on top
      particles.forEach(particle => drawParticle(particle, time));

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseEnter = () => {
      mouseRef.current.hover = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.hover = false;
    };

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    // Initialize
    resizeCanvas();
    createParticles();
    animate(0);

    // Event listeners
    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseenter', handleMouseEnter);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseenter', handleMouseEnter);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10"
      style={{ background: '#F7F7F7' }}
    />
  );
};

export default ParticleNetwork;
