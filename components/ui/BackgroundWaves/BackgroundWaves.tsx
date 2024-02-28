"use client";

import {
  useCustomMediaQuery,
  useCustomThemeQuery,
  useIsMounted,
} from "@/hooks";
import { cn } from "@/utils";
import { useEffect, useRef, useState } from "react";
import { CanvasRenderer, PerspectiveCamera, Scene, Sprite } from "three";
import { ParticleColor, ParticlePhysics } from "./constants";
import {
  createCanvasRenderer,
  createMaterialWithColor,
  createPerspectiveCamera,
  createScene,
  determineSpeedFromQuery,
} from "./utils";

let renderer: CanvasRenderer | undefined;
let camera: PerspectiveCamera | undefined;
let scene: Scene | undefined;

let particles: Sprite[] | undefined;
let particle: Sprite | undefined;
let count = 0;

export function BackgroundWaves() {
  const isMounted = useIsMounted();
  const mediaQuery = useCustomMediaQuery();
  const { isThemeDark } = useCustomThemeQuery();
  const [canAnimate, setCanAnimate] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const onWindowResize = () => {
    if (camera) {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    }

    if (renderer) {
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
  };

  const render = () => {
    if (particles?.length && renderer && scene && camera) {
      let i = 0;
      for (let ix = 0; ix < ParticlePhysics.AmountX; ix++) {
        for (let iy = 0; iy < ParticlePhysics.AmountY; iy++) {
          particle = particles[i++];

          particle.position.y =
            Math.sin((ix + count) * 0.5) * 20 +
            Math.sin((iy + count) * 0.5) * 20;

          particle.scale.x = particle.scale.y =
            (Math.sin((ix + count) * 0.3) + 2) * 4 +
            (Math.sin((iy + count) * 0.5) + 1) * 4;
        }
      }

      renderer.render(scene, camera);
      count += determineSpeedFromQuery(mediaQuery);
    }
  };

  const animate = () => {
    requestAnimationFrame(animate);
    render();
  };

  useEffect(() => {
    if (!isMounted()) {
      return;
    }

    if (!canAnimate) {
      setCanAnimate(true);
    }
  }, [isMounted, canAnimate]);

  useEffect(() => {
    if (!canAnimate) {
      return;
    }

    particles = [];
    scene = createScene();
    camera = createPerspectiveCamera();
    let material = createMaterialWithColor(
      // Create material with configured color, based on current theme.
      isThemeDark ? ParticleColor.ThemeDark : ParticleColor.ThemeLight
    );

    let i = 0;
    for (let ix = 0; ix < ParticlePhysics.AmountX; ix++) {
      for (let iy = 0; iy < ParticlePhysics.AmountY; iy++) {
        particle = particles[i++] = new Sprite(material);

        particle.position.x =
          ix * ParticlePhysics.Seperation -
          (ParticlePhysics.AmountX * ParticlePhysics.Seperation) / 2;

        particle.position.z =
          iy * ParticlePhysics.Seperation -
          (ParticlePhysics.AmountY * ParticlePhysics.Seperation - 10);

        scene.add(particle);
      }
    }

    renderer = createCanvasRenderer();
    renderer.setClearColor("black", 0);
    renderer.setSize(window.innerWidth, window.innerHeight);

    const { current: container } = containerRef;
    if (container) container.appendChild(renderer.domElement);
    window.addEventListener("resize", onWindowResize, false);

    return () => {
      // Destroy every reference to the canvas on cleanup.
      window.removeEventListener("resize", onWindowResize);
      if (container) container.innerHTML = "";
      particles = undefined;
      renderer = undefined;
      particle = undefined;
      camera = undefined;
      scene = undefined;
      count = 0;
    };
  }, [canAnimate, isThemeDark]);

  useEffect(() => {
    animate();

    // Delay makes transition smoother.
    const timeoutId = setInterval(() => {
      if (isMounted()) setIsAnimating(true);
    }, 100);

    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={cn(
        "absolute top-0 left-0 w-screen h-screen z-0 opacity-0 transition-opacity duration-1000",
        { "opacity-100": isAnimating }
      )}
      ref={containerRef}
    />
  );
}