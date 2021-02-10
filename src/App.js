import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei/core/OrbitControls';
// Alert
import Alert from './helpers/Alert';
// Models
import Model from './components';
import Plane from './components/Plane';
// Lights
import Lights from './components/Lights';
// data
import data from './info.json';
// styles
import './app.css';

const App = () => {
    return (
        <>
            <Alert />
            <Canvas
                camera={data.camera_setting}
                shadowMap
                onCreated={({ gl }) => {
                    gl.shadowMap.enabled = true;
                    gl.shadowMap.type = THREE.PCFSoftShadowMap;
                }}
            >
                <Lights />
                <Plane />
                <Suspense fallback={null}>
                    <Model />
                </Suspense>
                <OrbitControls />
            </Canvas>
        </>
    );
};

export default App;
