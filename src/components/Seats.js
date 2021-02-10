import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei/core/useGLTF';

import { seats } from '../info.json';

const Seats = () => {
    const group = useRef();
    const { nodes, materials } = useGLTF(seats.url);

    const renderSeats = () =>
        seats.position.map(pos => (
            <group ref={group} position={[-0.1, -1.2, pos]} key={pos}>
                <mesh
                    material={materials.sillones_COLOR_0}
                    geometry={nodes.Cube000.geometry}
                    position={[1.5, 0.09, -0.01]}
                    rotation={[Math.PI / 2, 0, -3.13]}
                    castShadow
                >
                    <meshPhysicalMaterial color='sandybrown' />
                </mesh>
                <mesh
                    material={materials.sillones_COLOR_0}
                    geometry={nodes.Cube001.geometry}
                    position={[0.8, 0.06, -0.06]}
                    rotation={[Math.PI / 2, 0, -3.13]}
                    castShadow
                >
                    <meshPhysicalMaterial color='sandybrown' />
                </mesh>
                <mesh
                    material={materials.sillones_COLOR_0}
                    geometry={nodes.Cube002.geometry}
                    position={[-1.4, 0.03, -0.13]}
                    rotation={[Math.PI / 2, 0, -3.13]}
                    castShadow
                >
                    <meshPhysicalMaterial color='sandybrown' />
                </mesh>
            </group>
        ));

    return renderSeats();
};

export default Seats;
