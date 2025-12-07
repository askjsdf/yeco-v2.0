'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { useTheme } from 'next-themes';

export default function PerfumeBottle3D() {
  const mountRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight || 500;

    // 场景设置
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100);
    camera.position.set(0, 0, 5); // 相机拉近一些

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 根据主题设置线条颜色
    const lineColor = theme === 'dark' ? 0xFFFFFF : 0x000000;
    const lineMaterial = new THREE.LineBasicMaterial({
      color: lineColor,
      transparent: true,
      opacity: 0.6,
      linewidth: 1.5
    });

    // 创建模型组
    const modelGroup = new THREE.Group();
    scene.add(modelGroup);

    // 加载 GLB 模型
    const loader = new GLTFLoader();
    let loadedModel: THREE.Group | null = null;

    loader.load(
      '/assets/model1.gltf',
      (gltf) => {
        console.log('✅ GLTF loaded successfully!', gltf);
        loadedModel = gltf.scene;

        let meshCount = 0;
        // 遍历模型中的所有网格，转换为线框
        loadedModel.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            meshCount++;
            console.log(`Processing mesh ${meshCount}:`, child);
            const wireframe = new THREE.LineSegments(
              new THREE.EdgesGeometry(child.geometry),
              lineMaterial
            );
            wireframe.position.copy(child.position);
            wireframe.rotation.copy(child.rotation);
            wireframe.scale.copy(child.scale);
            modelGroup.add(wireframe);
          }
        });

        console.log(`Total meshes converted to wireframe: ${meshCount}`);

        // 调整模型大小和位置（根据实际情况调整）
        const box = new THREE.Box3().setFromObject(modelGroup);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        console.log('Model size:', size);
        console.log('Model center:', center);

        // 根据屏幕宽度动态调整模型位置和缩放
        let xOffset = 0;
        let yOffset = 0;
        let scaleMultiplier = 1.2; // 默认手机端

        if (width >= 1400) {
          // 大屏桌面端 (>=1400px): 向左偏移较多
          xOffset = -2.0;
          yOffset = 0;
          scaleMultiplier = 2.5;
        } else if (width >= 1200) {
          // 中屏桌面端 (1200px-1399px): 向左偏移较少
          xOffset = -1.0;
          yOffset = 0;
          scaleMultiplier = 2.2;
        } else if (width >= 768) {
          // 平板端 (768px-1199px): 向左偏移,中等大小
          xOffset = -0.8;
          yOffset = 0;
          scaleMultiplier = 1.6;
        } else {
          // 手机端 (<768px): 居中,向上偏移避免文字重叠
          xOffset = 0;
          yOffset = 0.6;
          scaleMultiplier = 1.2;
        }

        modelGroup.position.set(xOffset, yOffset, 0);

        // 将模型的中心点移到原点
        loadedModel.position.set(-center.x, -center.y, -center.z);

        // 缩放模型
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = scaleMultiplier / maxDim;
        modelGroup.scale.setScalar(scale);

        console.log('Applied scale:', scale);
        console.log('Final model position:', modelGroup.position);
        console.log('Camera position:', camera.position);

        // 初始旋转
        modelGroup.rotation.x = 0.15;
        modelGroup.rotation.y = 0.2;
      },
      (progress) => {
        const percent = progress.total > 0 ? (progress.loaded / progress.total) * 100 : 0;
        console.log(`Loading: ${percent.toFixed(2)}% (${progress.loaded}/${progress.total} bytes)`);
      },
      (error: unknown) => {
        console.error('❌ Error loading model:', error);
        if (error instanceof Error) {
          console.error('Error details:', {
            message: error.message,
            stack: error.stack
          });
        }
      }
    );

    // 动画
    let targetRotationX = 0;
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // 平滑自动旋转
      modelGroup.rotation.y += 0.003;

      // 平滑跟随目标旋转
      modelGroup.rotation.x += (targetRotationX - modelGroup.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // 鼠标移动交互
    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      targetRotationX = y * 0.2;
    };

    // 响应式调整
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight || 500;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);

      // 根据屏幕宽度动态调整模型位置和缩放
      let xOffset = 0;
      let yOffset = 0;
      let scaleMultiplier = 1.2;

      if (newWidth >= 1400) {
        // 大屏桌面端
        xOffset = -2.0;
        yOffset = 0;
        scaleMultiplier = 2.5;
      } else if (newWidth >= 1200) {
        // 中屏桌面端
        xOffset = -1.0;
        yOffset = 0;
        scaleMultiplier = 2.2;
      } else if (newWidth >= 768) {
        // 平板端
        xOffset = -0.8;
        yOffset = 0;
        scaleMultiplier = 1.6;
      } else {
        // 手机端
        xOffset = 0;
        yOffset = 0.6;
        scaleMultiplier = 1.2;
      }

      modelGroup.position.x = xOffset;
      modelGroup.position.y = yOffset;

      // 调整缩放
      if (loadedModel) {
        const box = new THREE.Box3().setFromObject(modelGroup);
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = scaleMultiplier / maxDim;
        modelGroup.scale.setScalar(scale);
      }
    };

    container.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // 清理
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // 清理加载的模型
      if (loadedModel) {
        loadedModel.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.geometry.dispose();
            if (Array.isArray(child.material)) {
              child.material.forEach((material) => material.dispose());
            } else {
              child.material.dispose();
            }
          }
        });
      }

      lineMaterial.dispose();
      renderer.dispose();
    };
  }, [theme]); // 主题变化时重新渲染

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%',
        height: '100%',
        minHeight: '600px',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 0
      }}
    />
  );
}
