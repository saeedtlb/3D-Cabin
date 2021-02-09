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
                material-color='#434343'
            />
            <mesh
                material={materials.VENTANA}
                geometry={nodes.Cube000_1.geometry}
            />
            <mesh
                material={materials.sillones}
                geometry={nodes.Cube000_2.geometry}
                material-color='white'
            />
        </group>
    );
};

export default Cabin;
