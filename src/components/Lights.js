import React from 'react';

const Lights = () => {
    return (
        <>
            <ambientLight intensity={0.4} />
            <pointLight castShadow position={[11, 10.5, 8]} />

            {/* <directionalLight position={[5, 10, 10]} castShadow /> */}

            {/* <directionalLight
                position={[10, 5, 13]}
                intensity={0.3}
                castShadow
            />
            <directionalLight
                position={[-10, 5, 13]}
                intensity={0.3}
                castShadow
            />
            <spotLight
                position={[10, 12, 10]}
                penumbra={1}
                castShadow
                intensity={0.1}
            /> */}
        </>
    );
};

export default Lights;
