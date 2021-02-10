import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei/core/useGLTF';

import { cabin } from '../info.json';

const Cabin = () => {
    const group = useRef();

    const { nodes, materials } = useGLTF(cabin.url);

    return (
        <group ref={group} position={[0.3, 2.2, 23]}>
            <mesh
                material={materials['BASE.005']}
                geometry={nodes.Cube000.geometry}
                receiveShadow
            >
                <meshPhysicalMaterial color='#474747' />
            </mesh>
            <mesh
                material={materials.VENTANA}
                geometry={nodes.Cube000_1.geometry}
            />
            <mesh
                material={materials.sillones}
                geometry={nodes.Cube000_2.geometry}
            >
                <meshPhysicalMaterial
                    color='#B89E8D'
                    opacity={0.7}
                    transparent
                />
            </mesh>
        </group>
    );
};

export default Cabin;
