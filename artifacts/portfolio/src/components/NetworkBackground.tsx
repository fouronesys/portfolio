import { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;
    
    let animationFrameId: number;
    let points: Point[] = [];
    
    const mouse = { x: -1000, y: -1000 };
    
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    
    let isVisible = true;
    
    const init = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      
      const isMobile = rect.width < 768;
      const numPoints = isMobile ? 30 : 60;
      
      points = [];
      for (let i = 0; i < numPoints; i++) {
        points.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          vx: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.3,
          vy: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 1.5 + 1.5,
        });
      }
    };
    
    const draw = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(draw);
        return;
      }
      
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;
      const { width, height } = rect;
      
      ctx.clearRect(0, 0, width, height);
      
      const threshold = 140;
      
      points.forEach((p, i) => {
        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;
          
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
          
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            const force = (200 - dist) / 200;
            p.x += dx * force * 0.05;
            p.y += dy * force * 0.05;
          }
        }
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 255, 255, 0.5)';
        ctx.fill();
        
        for (let j = i + 1; j < points.length; j++) {
          const p2 = points[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < threshold) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 255, 255, ${(1 - dist / threshold) * 0.25})`;
            ctx.stroke();
          }
        }
      });
      
      animationFrameId = requestAnimationFrame(draw);
    };
    
    init();
    draw();
    
    const handleResize = () => init();
    let resizeTimeout: number;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(handleResize, 200);
    };
    window.addEventListener('resize', debouncedResize);
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };
    
    if (!prefersReducedMotion) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseleave', handleMouseLeave);
    }
    
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    const observer = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
    });
    observer.observe(canvas);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', debouncedResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 pointer-events-none" 
    />
  );
}
