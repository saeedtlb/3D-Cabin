import React from 'react'
import { useTexture } from '@react-three/drei/core/useTexture'
import * as THREE from 'three'
// texture
import { Asphalt_texture } from '../info.json'

const Plane = () => {
  const asphalt = useTexture(Asphalt_texture)
  asphalt.wrapS = asphalt.wrapT = THREE.RepeatWrapping
  asphalt.magFilter = asphalt.minFilter = THREE.LinearFilter

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[10, 55]} />
      <meshBasicMaterial attach="material" map={asphalt} side={THREE.DoubleSide} />
    </mesh>
  )
}

export default Plane
