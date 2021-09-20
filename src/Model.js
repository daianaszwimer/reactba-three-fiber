import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function Model() {
  const gltf = useLoader(GLTFLoader, './model.gltf')
  return (
    <>
      <primitive object={gltf.scene} />
    </>
  )
}

export default Model