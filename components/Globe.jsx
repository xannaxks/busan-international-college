'use client';

import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

const markers = [
  { location: [47.6062, -122.3321], size: 0.2, color: [0.851, 0.0078, 0.0078] }, // AWS - orange
  // { location: [37.3382, -121.8863], size: 0.2 }, // Cisco - blue
  { location: [37.3349, -122.0090], size: 0.2, color: [0.851, 0.0078, 0.0078] },       // Apple - red
  { location: [37.2636, 127.0286], size: 0.225, color: [0.851, 0.0078, 0.0078] },   // Samsung Electronics - blue
  { location: [37.5663, 126.9779], size: 0.225, color: [0.851, 0.0078, 0.0078] },     // LG Electronics - green
  { location: [37.5665, 126.9780], size: 0.225, color: [0.851, 0.0078, 0.0078] },     // Hyundai Motor - yellowish
  { location: [37.5665, 126.9780], size: 0.225, color: [0.851, 0.0078, 0.0078] },     // SK Group - purple
  { location: [37.5019, 127.0396], size: 0.225, color: [0.851, 0.0078, 0.0078] },           // Coupang - bright red
  { location: [38.9072, -77.0369], size: 0.15, color: [0.851, 0.0078, 0.0078] },  // Washington D.C., USA
  { location: [39.9042, 116.4074], size: 0.15 },  // Beijing, China
  { location: [35.6895, 139.6917], size: 0.15 },  // Tokyo, Japan
  { location: [52.5200, 13.4050], size: 0.15 },   // Berlin, Germany
  // { location: [42.8746, 74.5698], size: 0.15 },   // Bishkek, Kyrgyzstan
  { location: [51.1605, 71.4704], size: 0.15 },   // Nur-Sultan, Kazakhstan
  { location: [28.6139, 77.2090], size: 0.15 },   // New Delhi, India
  { location: [19.7633, 96.0785], size: 0.15 },   // Naypyidaw, Myanmar
  { location: [21.0278, 105.8342], size: 0.15 },  // Hanoi, Vietnam
  { location: [27.7172, 85.3240], size: 0.15 },   // Kathmandu, Nepal
  { location: [23.8103, 90.4125], size: 0.15 },   // Dhaka, Bangladesh
  { location: [55.7558, 37.6173], size: 0.15 },   // Moscow, Russia
  { location: [36.8065, 10.1815], size: 0.15 },   // Tunis, Tunisia
  { location: [3.8480, 11.5021], size: 0.15 },    // Yaoundé, Cameroon
  { location: [6.9271, 79.8612], size: 0.15 },    // Colombo, Sri Lanka
  { location: [41.2995, 69.2401], size: 0.15 },   // Tashkent, Uzbekistan
];

const Earth = ({
                 className,
                 theta = 0.25,
                 dark = 1,
                 scale = 1.1,
                 diffuse = 1.2,
                 mapSamples = 40000,
                 mapBrightness = 6,
                 baseColor = [1, 1, 1],
                 markerColor = [0.529, 0.016, 0.016],
                 glowColor = [1, 1, 1],
               }) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const globeRef = useRef(null);
  const phiRef = useRef(0);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const createOrResizeGlobe = () => {
      const container = containerRef.current;
      const canvas = canvasRef.current;

      const width = container.clientWidth;
      const height = width; // keep square
      const dpr = window.devicePixelRatio || 2;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      // Destroy old globe if exists
      if (globeRef.current) globeRef.current.destroy();

      // Create new globe
      globeRef.current = createGlobe(canvas, {
        devicePixelRatio: dpr,
        width: canvas.width,
        height: canvas.height,
        phi: 0,
        theta,
        dark,
        scale,
        diffuse,
        mapSamples,
        mapBrightness,
        baseColor,
        markerColor,
        glowColor,
        opacity: 1,
        offset: [0, 0],
        markers,
        onRender: (state) => {
          state.phi = phiRef.current;
          phiRef.current += 0.003;
        },
      });
    };

    // Initial render
    createOrResizeGlobe();

    // Responsive resize
    const resizeObserver = new ResizeObserver(createOrResizeGlobe);
    resizeObserver.observe(containerRef.current);

    return () => {
      if (globeRef.current) globeRef.current.destroy();
      resizeObserver.disconnect();
    };
  }, [theta, dark, scale, diffuse, mapSamples, mapBrightness, baseColor, markerColor, glowColor]);

  return (
    <div
      ref={containerRef}
      className={`flex items-center justify-center w-full max-w-[500px] mx-auto ${className || ''}`}
      style={{ aspectRatio: '1' }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />
    </div>
  );
};

export default Earth;