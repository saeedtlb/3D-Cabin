import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from 'react-three-fiber'
import * as THREE from 'three'
import { OrbitControls } from '@react-three/drei/core/OrbitControls'
// Side components
import Alert from './helpers/Alert'
import Tuturial from './helpers/Tuturial'
// Models
import Model from './components'
import Plane from './components/Plane'
// Lights
import Lights from './components/Lights'
// data
import data from './info.json'
// styles
import './app.css'
// Provider to be able use store in Canvas Elements
import { useGlobalDispatch, useGlobalState } from './context/globalContext'

const App = () => {
  const [showTuturial, setShowTuturial] = useState(true)

  const store = useGlobalState()
  const dispatch = useGlobalDispatch()

  const stopShowTuturial = () => setShowTuturial(false)

  useEffect(() => {
    THREE.DefaultLoadingManager.onLoad = () => setShowTuturial(true)
  }, [])

  return (
    <div
      className="wrapper"
      onPointerDown={() => (document.body.style.cursor = 'grabbing')}
      onPointerUp={() => (document.body.style.cursor = 'default')}>
      {showTuturial ? <Tuturial stopShowTuturial={stopShowTuturial} /> : null}
      <Alert />
      <Canvas
        camera={data.camera_setting}
        shadowMap
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true
          gl.shadowMap.type = THREE.PCFSoftShadowMap
        }}>
        <Lights />
        <Suspense fallback={null}>
          <Plane />
          <Model store={store} dispatch={dispatch} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default App
