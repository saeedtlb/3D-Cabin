import React, { Suspense, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import * as THREE from 'three';

import Cabin from './components/Cabin';
import Plane from './components/Plane';

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
            onCreated={({ gl }) => {
                gl.shadowMap.enabled = true;
                gl.shadowMap.type = THREE.PCFSoftShadowMap;
            }}
            onMouseDown={() => setHold(true)}
            onMouseUp={() => setHold(false)}
            onMouseMove={e => hold && specifyZboundries(e)}
        >
            <ambientLight intensity={0.1} />
            <directionalLight position={[0, 0, 19]} />
            <spotLight
                position={[-10, 12, 10]}
                penumbra={1}
                castShadow
                intensity={0.5}
            />
            <spotLight
                position={[10, 12, 10]}
                penumbra={1}
                castShadow
                intensity={0.5}
            />
            <Plane />
            <Suspense fallback={null}>
                <Cabin move={zPos} />
                {/* <Seat /> */}
            </Suspense>
        </Canvas>
    );
};

export default App;
