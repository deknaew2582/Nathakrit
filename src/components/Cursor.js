import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const CanvasContainer = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9999;
`;

const Cursor = () => {
  const canvasRef = useRef(null);
  const drops = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createDrop = (x, y) => {
      drops.current.push({
        x,
        y,
        radius: 0,
        opacity: 1,
        speed: Math.random() * 2 + 1,
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drops.current = drops.current.filter(drop => {
        ctx.beginPath();
        ctx.arc(drop.x, drop.y, drop.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 255, 218, ${drop.opacity})`; // #64FFDA
        ctx.fill();

        drop.radius += drop.speed * 0.1;
        drop.opacity -= 0.01;

        return drop.opacity > 0;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e) => {
      createDrop(e.clientX, e.clientY);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <CanvasContainer ref={canvasRef} />;
};

export default Cursor;