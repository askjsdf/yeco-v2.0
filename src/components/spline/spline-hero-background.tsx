'use client';
import React, { Suspense, useState } from 'react';
import dynamic from 'next/dynamic';

// 动态导入 Spline，禁用 SSR
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'transparent',
      }}
    >
      <div style={{ color: 'var(--tp-common-black)', fontSize: '14px' }}>
        Loading 3D Scene...
      </div>
    </div>
  ),
});

export default function SplineHeroBackground() {
  const [isError, setIsError] = useState(false);

  const handleLoad = () => {
    console.log('Spline scene loaded successfully');
  };

  const handleError = (error: any) => {
    console.error('Spline loading error:', error);
    setIsError(true);
  };

  if (isError) {
    return (
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(0,0,0,0.05)',
        }}
      >
        <p style={{ color: 'var(--tp-common-black)', fontSize: '14px' }}>
          3D Scene temporarily unavailable
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none', // 禁用鼠标交互，允许滚动穿透
      }}
    >
      <Suspense
        fallback={
          <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <p>Loading...</p>
          </div>
        }
      >
        <Spline
          scene="https://prod.spline.design/Eg6zumjoIPb9LiTZ/scene.splinecode"
          onLoad={handleLoad}
        />
      </Suspense>
    </div>
  );
}
