import React from 'react'
import { Canvas } from '@react-three/fiber'
import "./App.css"
import Model from "./Model";
import {Suspense} from "react";
import { Environment, OrbitControls } from "@react-three/drei";

function App() {
  return (
      <Canvas>
        <Suspense fallback={null}>
          <Model/>
          <OrbitControls />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
  )
}

export default App