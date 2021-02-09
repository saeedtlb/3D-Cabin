import React from 'react';

const Lights = () => {
    return (
        <>
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
        </>
    );
};

export default Lights;
