import React, { useEffect, useRef } from 'react';
import { useThree } from 'react-three-fiber';
import { useGLTF } from '@react-three/drei/core/useGLTF';

import { cabin } from '../info.json';

const Cabin = ({ move }) => {
    const group = useRef();

    const { nodes, materials } = useGLTF(cabin.url);

    // const { camera } = useThree();

    // useEffect(() => {
    //     camera.position.z = move;
    // }, [move]);

    return (
        <group ref={group} position={[0.3, 2.2, 23]}>
            <mesh
                material={materials['BASE.005']}
                geometry={nodes.Cube000.geometry}
                receiveShadow
                castShadow
            >
                <meshPhysicalMaterial color='gray' />
            </mesh>
            <mesh
                material={materials.VENTANA}
                geometry={nodes.Cube000_1.geometry}
            />
            <mesh
                material={materials.sillones}
                geometry={nodes.Cube000_2.geometry}
            >
                <meshPhysicalMaterial color='white' opacity={0.6} transparent />
            </mesh>
        </group>
    );
};

export default Cabin;
