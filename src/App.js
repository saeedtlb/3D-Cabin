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
import { downWard } from './helpers/misc';
import data from './info.json';

import './app.css';

const App = () => {
    const [zPos, setZpos] = useState(18);
    const [lastPoint, setLastPoint] = useState(0);
    const [hold, setHold] = useState(false);

    const specifyZboundries = ({ pageY: y }) => {
        const down = downWard(lastPoint, y);
        setLastPoint(y);
        if (down && zPos > -2) {
            setZpos(z => (z -= 0.18));
        } else if (!down && zPos < 20) {
            setZpos(z => (z += 0.18));
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
            onMouseDown={() => setHold(true)}
            onMouseUp={() => setHold(false)}
            onMouseMove={e => hold && specifyZboundries(e)}
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
