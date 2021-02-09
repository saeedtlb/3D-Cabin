const Plane = () => (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} receiveShadow>
        <planeBufferGeometry attach='geometry' args={[2, 40]} />
        <meshPhysicalMaterial attach='material' color='pink' />
    </mesh>
);

export default Plane;
