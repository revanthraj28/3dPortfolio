import { useState, Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import { Island } from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import Homeinfo from "../components/Homeinfo";
import sakura from "../assets/sakura.mp3";
import { soundoff, soundon } from "../assets/icons";

const Home = () => {
  const audioRef = useRef(new Audio(sakura))
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setisPlayingMusic] = useState(false)

  useEffect(()=>{
    if(isPlayingMusic){
      audioRef.current.play();
    }
    return()=>{
      audioRef.current.pause();
    }
  },[isPlayingMusic])

  const adjustIsandForScreenSize = () => {
    let screenScale = null;
    let screeenPostion = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screeenPostion, rotation];
  };
  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPostion;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPostion = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPostion = [0, -3, -3];
    }
    return [screenScale, screenPostion];
  };

  const [islandScale, islandPostion, islandRotation] =
    adjustIsandForScreenSize();
  const [planeScale, planePostion] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div
        className="absolute top-28 left-0 right-0 z-10 flex 
      items-center justify-center"
      >
        {currentStage && <Homeinfo currentStage={currentStage}/>}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight postion={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10,5,10]} intensity={2}/>
          <spotLight
          position={[0,50,10]}
          angle={0.15}
          penumbra={1}
          intensity={2}
          />
          <hemisphereLight
            skycolor="#ble1ff"
            groundcolor="#000000"
            intensity={1}
          />
          <Sky isRotating={isRotating} />
          <Bird />
          <Island
            position={islandPostion}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            isRotating={isRotating}
            scale={planeScale}
            position={planePostion}
            rotation={[0, 20.1, 0]}
          />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-2 left-2">
        <img src={!isPlayingMusic ? soundoff : soundon}
        alt="sound"
        className="w-10 h-10 cursor-pointer object-contain"
        onClick={()=>setisPlayingMusic(!isPlayingMusic)}/>
      </div>
    </section>
  );
};

export default Home;
