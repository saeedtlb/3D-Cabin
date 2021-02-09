import React, { useState, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useThree } from 'react-three-fiber';

const Cabin = ({ move }) => {
    const [model, setModel] = useState();

    useEffect(() => {
        new GLTFLoader().load('/models/cabin.glb', setModel);
    }, []);

    const { camera } = useThree();

    useEffect(() => {
        camera.position.z = move;
    }, [move]);

    return model ? <primitive object={model.scene} /> : null;
};

export default Cabin;
