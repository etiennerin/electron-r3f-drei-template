import React, { useRef, Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Canvas, useFrame } from '@react-three/fiber'
import Wildlife from './Wildlife'
import { OrbitControls } from '@react-three/drei'
import './App.css';

function App() {
  return (
    <Canvas>
	  <ambientLight intensity={0.9} />
      <Suspense fallback={null}>
        <Wildlife animalsQuantity={500} />
      </Suspense>
      <OrbitControls enableRotate={true} />
    </Canvas>
  );
}

export default App;