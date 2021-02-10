import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei/core/useGLTF';
import { seats } from '../info.json';

const Seats = () => {
    const group = useRef();
    const { nodes, materials } = useGLTF(seats.url);

    const seatMesh = row_num =>
        Object.values(nodes)
            .slice(1)
            .map((node, i) => (
                <mesh
                    key={row_num + seats.numbers[i]}
                    name={row_num + seats.numbers[i]}
                    position={seats.position[i]}
                    geometry={node.geometry}
                    material={materials.sillones_COLOR_0}
                    rotation={[Math.PI / 2, 0, -3.13]}
                    castShadow
                >
                    <meshPhysicalMaterial color='#ED081A' />
                </mesh>
            ));

    const changeColor = ({ stopPropagation, object }) => {
        console.log(object.name);
        stopPropagation();
        object.material.color = {
            r: 0,
            g: 1,
            b: 0,
        };
    };

    const renderSeats = () =>
        seats.row_position.map((pos, i) => (
            <group
                ref={group}
                position={[-0.1, -1.2, pos]}
                key={pos}
                onPointerDown={changeColor}
            >
                {seatMesh(i + 1)}
            </group>
        ));

    return renderSeats();
};

export default Seats;
