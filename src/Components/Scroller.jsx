import * as THREE from "three";
import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

import {
  Preload,
  ScrollControls,
  Scroll,
  useScroll,
  Image as ImageImpl,
} from "@react-three/drei";

function Image({ c = new THREE.Color(), ...props }) {
  const ref = useRef();
  const [hovered, hover] = useState(false);
  useFrame(() => {
    ref.current.material.color.lerp(
      c.set(hovered ? "white" : "#ccc"),
      hovered ? 0.4 : 0.05
    );
  });
  return (
    <ImageImpl
      ref={ref}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      {...props}
    />
  );
}

function Images() {
  const { width, height } = useThree((state) => state.viewport);
  const data = useScroll();
  const group = useRef();
  useFrame(() => {
    group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[2].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 3;
    group.current.children[3].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 2;
    group.current.children[4].material.zoom =
      1 + data.range(1.25 / 3, 1 / 3) / 1;
    group.current.children[5].material.zoom =
      1 + data.range(1.8 / 3, 1 / 3) / 3;
    group.current.children[5].material.grayscale =
      1 - data.range(1.6 / 3, 1 / 3);
    group.current.children[6].material.zoom =
      1 + (1 - data.range(2 / 3, 1 / 3)) / 3;
  });
  return (
    <group ref={group}>
      <Image
        position={[-2, 0, 0]}
        scale={[4, height, 1]}
        url=''
      />
      <Image position={[2, 0, 1]} scale={3} url='' />
      <Image
        position={[-2.3, -height, 2]}
        scale={[1, 3, 1]}
        url=''
      />
      <Image
        position={[-0.6, -height, 3]}
        scale={[1, 2, 1]}
        url=''
      />
      <Image position={[0.75, -height, 3.5]} scale={1.5} url='' />
      <Image
        position={[0, -height * 1.5, 2.5]}
        scale={[1.5, 3, 1]}
        url=''
      />
      <Image
        position={[0, -height * 2 - height / 4, 0]}
        scale={[width, height / 2, 1]}
        url=''
      />
    </group>
  );
}

export default function Scroller() {
  return (
    <dir className="h-screen w-full">
      <Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <ScrollControls damping={4} pages={3}>
            <Scroll>
              <Images />
            </Scroll>
            <Scroll html>
              <h1
                className="text-5xl font-bold"
                style={{ position: "absolute", top: "60vh", left: "0.5em" }}
              >
                Stay
              </h1>
              <h1
                className="text-5xl font-bold"
                style={{ position: "absolute", top: "120vh", left: "60vw" }}
              >
                With
              </h1>
              <div>
                <h1
                  style={{
                    position: "absolute",
                    top: "198.5vh",
                    left: "30vw",
                    fontSize: "40vw",
                  }}
                >
                  Us
                </h1>
              </div>
            </Scroll>
          </ScrollControls>
          <Preload />
        </Suspense>
      </Canvas>
    </dir>
  );
}
