import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import Lights from "./Lights";
import IPone from "./IPone";
import { Suspense } from "react";
import * as THREE from "three";

const ModelView = (props) => {
  const {
    index,
    groupRef,
    gsapType,
    controlRef,
    setRotationState,
    item,
    size,
  } = props;
  return (
    <View
      index={index}
      id={gsapType}
      className={` w-full h-full ${index == 2 ? "right-[-100%]" : ""}`}
    >
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />
      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        rotateSpeed={0.4}
        enablePan={false}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={()=>setRotationState(controlRef.current.getAzimuthhalAngle())}
      />

      <group
        ref={groupRef}
        name={`${index === 1 ? "small" : "large"}`}
        position={[0, 0, 0]}
      >
        <Suspense fallback={<div>Loading</div>}>
          <IPone scale={index===1 ? [15,15,15] : [17,17,17]} />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
