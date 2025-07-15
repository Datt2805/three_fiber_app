import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import MacContainer from "./MacContainer";

const App = () => {
  return (
    <div className="w-full h-screen">
      <div className="navbar absolute flex top-20 left-1/2 -translate-x-1/2 gap-10">
        {["iPhone", "iPad", "Services", "Mac", "Products"].map((e) => (
          <a href="" className="text-white font-[500] text-2xl capitalize">
            {e}
          </a>
        ))}
      </div>
      <div className="absolute flex flex-col items-center text-white top-40 left-1/2 -translate-x-1/2">
        <h3 className="macbook-text text-7xl tracking-tight font-[700]">
          Macbook Pro.
        </h3>
        <h5 className="">Oh so pro !</h5>
        <p className="text-center w-3/4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod sunt
          quis vitae ex.
        </p>
      </div>
      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
          ]}
        />
        <ScrollControls pages={3}>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
