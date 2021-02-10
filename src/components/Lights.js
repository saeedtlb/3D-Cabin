import React from 'react';

const Lights = () => {
    return (
        <>
            <ambientLight intensity={0.4} />
            <spotLight position={[11, 10.5, 13]} castShadow penumbra={1} />
        </>
    );
};

export default Lights;
