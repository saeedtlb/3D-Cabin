// import { useEffect, useRef, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from 'react-three-fiber';
import * as THREE from 'three';

const Model = ({ url }) => {
    // const [model, setModel] = useState();
    // const ref = useRef();

    // useEffect(() => {
    //     new GLTFLoader().load(url, setModel);
    // }, []);

    // const gltf = useLoader(GLTFLoader, url);
    const { nodes, materials, scene } = useLoader(GLTFLoader, url);

    const geo = nodes.Cube000.geometry;
    const material = materials.sillones;

    console.log(geo);
    console.log(material);

    return (
        // <mesh geometry={geo}>
        <mesh material={{ color: 0x000000 }}>
            <primitive object={scene} />
            <meshBasicMaterial material={{ color: 0x000000 }} />
        </mesh>
    );
    // return (
    //     <mesh>
    //         <bufferGeometry attach='geometry' {...geo} />
    //         {/* <meshBasicMaterial color='black' /> */}
    //         <meshPhysicalMaterial {...material} color='orange' />
    //     </mesh>
    // );
};

export default Model;
