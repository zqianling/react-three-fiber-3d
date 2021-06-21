/*
 * @module:
 * @Author: 张前领<qianling.zhang@hand-china.com>
 * @Date: 2021-06-03 20:51:09
 * @LastEditTime: 2021-06-21 14:52:31
 * @copyright: Copyright (c) 2020,Hand
 */
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment } from "@react-three/drei";

import Model from "./Model";
import './App.css';
import Loader from './Loader';

export default function App() {
  return (
    <div className="App">
      <Canvas>
        <ambientLight intensity={1} />
        <Suspense fallback={<Loader />}>
          <Model position={[0, -4, -12]} />
          {/* <Environment preset="apartment" background /> */}
        </Suspense>
      </Canvas>
    </div>
  );
}
