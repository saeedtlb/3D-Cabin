import React, { Suspense, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import * as THREE from 'three';

import { OrbitControls } from '@react-three/drei/core/OrbitControls';

// Models
import Model from './components';
import Plane from './components/Plane';

// Lights
import Lights from './components/Lights';

// Helpers
import data from './info.json';

import './app.css';

const App = () => {
    const [zPos, setZpos] = useState(18);

    const moveInVagen = ({ key }) => {
        switch (key) {
            case 'ArrowUp':
            case 'w':
                setZpos(z => (z -= 0.3));
                break;
            case 'ArrowDown':
            case 's':
                setZpos(z => (z += 0.3));
                break;
            default:
                break;
        }
    };

    return (
        <Canvas
            camera={data.camera_setting}
            shadowMap
            onCreated={({ gl }) => {
                gl.shadowMap.enabled = true;
                gl.shadowMap.type = THREE.PCFSoftShadowMap;
            }}
            // tabIndex='0'
            // onKeyDown={moveInVagen}
        >
            <Lights />
            <Plane />
            <Suspense fallback={null}>
                <Model move={zPos} />
            </Suspense>
            <OrbitControls />
        </Canvas>
    );
};

export default App;
