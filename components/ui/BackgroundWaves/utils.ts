"use client";

import { CustomMediaQuery } from "@/hooks";
import {
  CanvasRenderer,
  PerspectiveCamera,
  Scene,
  SpriteCanvasMaterial,
  SpriteCanvasMaterialParameters,
} from "three";
import { CameraPosition, ParticlePhysics } from "./constants";

export function createCanvasRenderer() {
  return new CanvasRenderer({ alpha: true });
}

export function createPerspectiveCamera() {
  const aspectRatio = window.innerWidth / window.innerHeight;
  const camera = new PerspectiveCamera(120, aspectRatio, 1, 10000);
  camera.rotation.x = CameraPosition.X;
  camera.position.y = CameraPosition.Y;
  camera.position.z = CameraPosition.Z;
  return camera;
}

export function createMaterialWithColor(
  color: SpriteCanvasMaterialParameters["color"]
) {
  return new SpriteCanvasMaterial({
    program: function (context) {
      context?.beginPath();
      // Converts the particle into circlular sprite with given radius.
      context?.arc(0, 0, ParticlePhysics.Radius, 0, Math.PI * 2, true);
      context?.fill();
    },
    color,
  });
}

export function determineSpeedFromQuery(query: CustomMediaQuery) {
  // Increase or decrease speed based on available screen area.
  if (query.isXlAndAbove) {
    return ParticlePhysics.Speed;
  }

  if (query.isLgAndAbove) {
    return ParticlePhysics.Speed / 2;
  }

  if (query.isMdAndAbove) {
    return ParticlePhysics.Speed / 3;
  }

  return ParticlePhysics.Speed / 4;
}

export function createScene() {
  return new Scene();
}
