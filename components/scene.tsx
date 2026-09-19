'use client';
import { Suspense, useEffect, useMemo, useRef, useState, Component, type ReactNode } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, Lightformer, OrbitControls, useGLTF, PerformanceMonitor, ContactShadows, Html, useProgress } from '@react-three/drei';
import * as THREE from 'three';
import { RotateCcw, Hand } from 'lucide-react';

class SceneBoundary extends Component<{children:ReactNode},{failed:boolean}>{
 state={failed:false}; static getDerivedStateFromError(){return {failed:true};}
 render(){return this.state.failed?<div className="scene-fallback"><strong>KEEPING YOU MOVING.</strong><p>The 3D view is unavailable on this browser. All services and booking are ready below.</p></div>:this.props.children;}
}
function Loader(){const {progress}=useProgress();return <Html center><div className="model-loading"><span className="loading-ring"/><span>LOADING 3D · {Math.round(progress)}%</span></div></Html>}
const serviceAssets:Record<string,string>={
 vehicle:'/models/corolla-2014.glb',
 mechanical:'/models/service-engine-work.glb',
 engine:'/models/service-engine.glb',
 electrical:'/models/service-alternator.glb',
 charging:'/models/service-charger.glb',
 brake:'/models/service-brake.glb',
 suspension:'/models/service-strut.glb',
 diagnostics:'/models/service-diagnostics.glb',
 maintenance:'/models/service-oil-filter.glb',
 mobile:'/models/service-toolbox.glb',
};
function Car({mobile,road,reduced,hero}:{mobile:boolean;road:boolean;reduced:boolean;hero:boolean}) {
 const asset=hero?(mobile?'/models/corolla-2014-mobile.glb':'/models/corolla-2014.glb'):road?(mobile?'/models/civic-2016-mobile.glb':'/models/civic-2016.glb'):(mobile?'/models/car-mobile.glb':'/models/car.glb');
 const {scene}=useGLTF(asset,'/draco/');
 const model=useMemo(()=>{const cloned=scene.clone(true);const box=new THREE.Box3().setFromObject(cloned);const center=box.getCenter(new THREE.Vector3());cloned.position.sub(center);cloned.position.y-=box.min.y-center.y;if(road){const size=box.getSize(new THREE.Vector3());const scale=4.6/Math.max(size.x,size.y,size.z);cloned.scale.setScalar(scale);cloned.position.multiplyScalar(scale);}cloned.traverse(o=>{if(o instanceof THREE.Mesh){o.castShadow=false;o.receiveShadow=false;if(o.material){const materials=Array.isArray(o.material)?o.material:[o.material];const changed=materials.map(m=>{const mat=m.clone() as THREE.MeshStandardMaterial;if(hero&&/^main_paint/i.test(mat.name)){mat.color.set('#f4f4f1');mat.metalness=.38;mat.roughness=.25;}else if(road&&/^main_material/i.test(mat.name)){mat.color.set('#05070b');mat.metalness=.64;mat.roughness=.2;}else if(/body_color/i.test(mat.name)){mat.color.set('#9298a1');mat.metalness=.92;mat.roughness=.23;}if('transmission' in mat)(mat as THREE.MeshPhysicalMaterial).transmission=0;return mat;});o.material=Array.isArray(o.material)?changed:changed[0];}}});return cloned;},[scene,hero,road]);
 const group=useRef<THREE.Group>(null);const scroll=useRef(0);
 useEffect(()=>{const run=()=>{scroll.current=Math.min(window.scrollY/window.innerHeight,1)};window.addEventListener('scroll',run,{passive:true});return()=>window.removeEventListener('scroll',run);},[]);
 useFrame((_,dt)=>{if(group.current&&!reduced)group.current.rotation.y=THREE.MathUtils.damp(group.current.rotation.y,Math.PI-.28+scroll.current*.18,3,dt)});
 return <group ref={group} rotation={[0,Math.PI-.28,0]} scale={hero?(mobile?.9:.94):1}><primitive object={model}/>{road&&[-1.5,0,1.5].map(z=><mesh key={z} rotation={[-Math.PI/2,0,0]} position={[1.65,.01,z]}><planeGeometry args={[.07,.8]}/><meshBasicMaterial color="#e1e1e1"/></mesh>)}</group>;
}
function CameraSetup({mobile,reset}:{mobile:boolean;reset:number}){const {camera}=useThree();useEffect(()=>{camera.position.set(mobile?6.6:5.7,mobile?2.9:2.5,6.9);camera.lookAt(0,.5,0);camera.updateProjectionMatrix()},[camera,mobile,reset]);return null;}
function PartCameraSetup({part,reset}:{part:string;reset:number}){const {camera}=useThree();useEffect(()=>{camera.position.set(3,2,4);camera.lookAt(0,.35,0);camera.updateProjectionMatrix()},[camera,part,reset]);return null;}
function ServiceModel({type,mobile,reduced}:{type:string;mobile:boolean;reduced:boolean}){
 const asset=type==='vehicle'&&mobile?'/models/corolla-2014-mobile.glb':serviceAssets[type]||serviceAssets.engine;
 const {scene}=useGLTF(asset,'/draco/');
 const model=useMemo(()=>{const cloned=scene.clone(true);const box=new THREE.Box3().setFromObject(cloned);const center=box.getCenter(new THREE.Vector3());const size=box.getSize(new THREE.Vector3());const scale=(type==='vehicle'?2.85:2.6)/Math.max(size.x,size.y,size.z);cloned.position.sub(center);cloned.position.y-=box.min.y-center.y;cloned.position.multiplyScalar(scale);cloned.scale.setScalar(scale);cloned.traverse(o=>{if(o instanceof THREE.Mesh){o.castShadow=!reduced;o.receiveShadow=false;if(o.material){const materials=Array.isArray(o.material)?o.material:[o.material];const polished=materials.map(m=>{const mat=m.clone() as THREE.MeshStandardMaterial;if('envMapIntensity' in mat)mat.envMapIntensity=1.25;if('transmission' in mat)(mat as THREE.MeshPhysicalMaterial).transmission=0;return mat;});o.material=Array.isArray(o.material)?polished:polished[0];}}});return cloned;},[scene,type,reduced]);
 return <primitive object={model}/>;
}
function ComponentDisplay({type,mobile,reduced}:{type:string;mobile:boolean;reduced:boolean}){const r=useRef<THREE.Group>(null);useFrame((s)=>{if(r.current&&!reduced)r.current.position.y=Math.sin(s.clock.elapsedTime*.8)*.025});return <group ref={r} rotation={[.13,-.42,0]}><ServiceModel type={type} mobile={mobile} reduced={reduced}/></group>}
export default function Scene({variant='hero',part='engine'}:{variant?:'hero'|'road'|'part'|'final';part?:string}) {
 const host=useRef<HTMLDivElement>(null);const [active,setActive]=useState(false);const [seen,setSeen]=useState(false);const [mobile,setMobile]=useState(true);const [reduced,setReduced]=useState(false);const [dpr,setDpr]=useState(1);const [reset,setReset]=useState(0);
 useEffect(()=>{const media=matchMedia('(max-width: 767px)');const motion=matchMedia('(prefers-reduced-motion: reduce)');const update=()=>{setMobile(media.matches);setReduced(motion.matches);setDpr(Math.min(devicePixelRatio,media.matches?1.25:1.7));};update();media.addEventListener('change',update);motion.addEventListener('change',update);const io=new IntersectionObserver(([e])=>{setActive(e.isIntersecting);if(e.isIntersecting)setSeen(true)},{rootMargin:'100px'});if(host.current)io.observe(host.current);const visibility=()=>setActive(!document.hidden&&!!host.current&&host.current.getBoundingClientRect().bottom>0&&host.current.getBoundingClientRect().top<innerHeight);document.addEventListener('visibilitychange',visibility);return()=>{io.disconnect();media.removeEventListener('change',update);motion.removeEventListener('change',update);document.removeEventListener('visibilitychange',visibility)};},[]);
 const isPart=variant==='part';
 return <div className={`three-scene scene-${variant}`} ref={host} aria-label={isPart?`Interactive 3D ${part} assembly`:variant==='hero'?'Interactive 3D white Toyota Corolla sedan. Drag horizontally to rotate.':variant==='road'?'Interactive 3D black Honda Civic sedan. Drag horizontally to rotate.':'Interactive 3D sports car. Drag horizontally to rotate.'}>
 <SceneBoundary>{seen?<Canvas dpr={dpr} shadows={!mobile&&!reduced} frameloop={active?(reduced?'demand':'always'):'never'} gl={{antialias:!mobile,powerPreference:'high-performance',alpha:true}} camera={{position:isPart?[3,2,4]:[6.6,2.9,6.9],fov:isPart?32:32,near:.1,far:60}}><PerformanceMonitor flipflops={2} onDecline={()=>setDpr(1)} onFallback={()=>setDpr(.85)}/><Suspense fallback={<Loader/>}><ambientLight intensity={.5}/><directionalLight castShadow={!mobile&&!reduced} position={[2,7,4]} intensity={2.7}/><directionalLight position={[-5,2,-3]} intensity={4} color="#ff6a30"/><Environment resolution={mobile?128:256}><Lightformer intensity={4} position={[0,6,0]} rotation={[Math.PI/2,0,0]} scale={[8,3,1]}/><Lightformer intensity={3} position={[-4,2,1]} rotation={[0,Math.PI/2,0]} scale={[2,6,1]}/><Lightformer intensity={5} color="#ff6728" position={[4,2,-3]} rotation={[0,-Math.PI/2,0]} scale={[2,5,1]}/><Lightformer intensity={2} position={[0,3,6]} scale={[10,1,1]}/></Environment>{isPart?<><PartCameraSetup part={part} reset={reset}/><ComponentDisplay type={part} mobile={mobile} reduced={reduced}/><mesh rotation={[-Math.PI/2,0,0]} position={[0,-.018,0]}><circleGeometry args={[2.7,64]}/><meshBasicMaterial color="#08090b" transparent opacity={.2}/></mesh>{!mobile&&!reduced&&<ContactShadows position={[0,-.01,0]} opacity={.38} scale={5} blur={2.2} far={2.5} resolution={256} frames={1}/>}</>:<><CameraSetup mobile={mobile} reset={reset}/><Car mobile={mobile} road={variant==='road'} reduced={reduced} hero={variant==='hero'}/><mesh rotation={[-Math.PI/2,0,0]} position={[0,-.04,0]}><circleGeometry args={[7,64]}/><meshBasicMaterial color="#08090b" transparent opacity={.3}/></mesh><mesh rotation={[-Math.PI/2,0,0]} position={[0,-.025,0]}><ringGeometry args={[3.15,3.17,96]}/><meshBasicMaterial color="#ff5928" transparent opacity={.5}/></mesh>{!mobile&&<ContactShadows position={[0,-.02,0]} opacity={.6} scale={11} blur={2.4} far={3} resolution={256} frames={1}/>}</>}<OrbitControls key={`${part}-${reset}`} enablePan={false} enableZoom={false} minPolarAngle={Math.PI/3.2} maxPolarAngle={Math.PI/2.15} target={[0,isPart ? .35 : .5,0]} rotateSpeed={.55} autoRotate={false} enableDamping/></Suspense></Canvas>:<div className="stage-loading"><span className="loading-ring"/> PREPARING 3D</div>}</SceneBoundary>
 {!isPart&&<div className="scene-controls"><span><Hand size={13}/> DRAG TO EXPLORE</span><button onClick={()=>setReset(v=>v+1)} aria-label="Reset car view"><RotateCcw size={14}/></button></div>}
 </div>;
}

