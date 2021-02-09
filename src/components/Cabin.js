import { useState, useEffect, useRef } from 'react';
// import * as THREE from 'three';
import { useThree } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useGLTF } from '@react-three/drei/core/useGLTF';
// import { OrbitControls } from '@react-three/drei/core/OrbitControls';

import { seat_position } from '../info.json';

const Cabin = props => {
    const [model, setModel] = useState();

    const group = useRef();
    const { nodes, materials } = useGLTF('/models/seat.glb');

    useEffect(() => {
        new GLTFLoader().load('/models/cabin.glb', setModel);
    }, []);

    const { camera } = useThree();

    useEffect(() => {
        camera.position.z = props.move;
    }, [props.move]);

    const renderSeats = () =>
        seat_position.map(pos => (
            <group position={[-0.1, -1.2, pos]} key={pos}>
                <mesh
                    material={materials.sillones_COLOR_0}
                    geometry={nodes.Cube000.geometry}
                    position={[1.6, 0.09, -0.01]}
                    rotation={[Math.PI / 2, 0, -3.13]}
                    material-color='sandybrown'
                />
                <mesh
                    material={materials.sillones_COLOR_0}
                    geometry={nodes.Cube001.geometry}
                    position={[0.9, 0.06, -0.06]}
                    rotation={[Math.PI / 2, 0, -3.13]}
                />
                <mesh
                    material={materials.sillones_COLOR_0}
                    geometry={nodes.Cube002.geometry}
                    position={[-1.4, 0.03, -0.13]}
                    rotation={[Math.PI / 2, 0, -3.13]}
                />
            </group>
        ));

    return model ? (
        <group ref={group} dispose={null} {...props}>
            {renderSeats()}
            <primitive object={model.scene} />
            {/* <OrbitControls /> */}
        </group>
    ) : null;
};

export default Cabin;
