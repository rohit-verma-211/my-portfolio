import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, Sphere, PerspectiveCamera, OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import { Globe, Shield, Zap, Database, Activity } from "lucide-react";

/**
 * DIGITAL HEMISPHERE COMPONENT
 * Creates a structured grid of points on the top half of a sphere.
 */
function DigitalHemisphere({ radius = 1.6, density = 50 }) {
  const pointsRef = useRef();

  const points = useMemo(() => {
    const p = [];
    const count = density * density;
    for (let i = 0; i < count; i++) {
      // Create a more uniform distribution than pure random
      const theta = (Math.acos(1 - (2 * Math.random()) / 2)); // 0 to PI/2 (Upper half)
      const phi = Math.random() * Math.PI * 2;

      const x = radius * Math.sin(theta) * Math.cos(phi);
      const y = radius * Math.cos(theta);
      const z = radius * Math.sin(theta) * Math.sin(phi);
      p.push(new THREE.Vector3(x, y, z));
    }
    return p;
  }, [radius, density]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0015;
      // Slight "breathing" effect
      pointsRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.02);
    }
  });

  return (
    <group ref={pointsRef}>
      {/* The main digital points */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={points.length}
            array={new Float32Array(points.flatMap((v) => [v.x, v.y, v.z]))}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#00f2ff"
          size={0.015}
          transparent
          opacity={0.6}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Subtle core glow */}
      <Sphere args={[radius * 0.98, 32, 32]}>
        <meshBasicMaterial 
          color="#075378" 
          transparent 
          opacity={0.05} 
          wireframe
        />
      </Sphere>
    </group>
  );
}

/**
 * BEZIER ARCS COMPONENT
 * Animates arcs between random points on the hemisphere.
 */
function ConnectionArcs({ count = 12, radius = 1.6 }) {
  const groupRef = useRef();

  const arcs = useMemo(() => {
    return [...Array(count)].map(() => {
      // Start/End points on the upper hemisphere
      const getPoint = () => {
        const theta = Math.random() * Math.PI * 0.4; // Upper half
        const phi = Math.random() * Math.PI * 2;
        return new THREE.Vector3(
          radius * Math.sin(theta) * Math.cos(phi),
          radius * Math.cos(theta),
          radius * Math.sin(theta) * Math.sin(phi)
        );
      };

      const start = getPoint();
      const end = getPoint();
      
      // Control point for curve (elevated higher)
      const mid = start.clone().lerp(end, 0.5).normalize().multiplyScalar(radius * 1.8);
      
      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      return curve.getPoints(30);
    });
  }, [count, radius]);

  useFrame(() => {
    if (groupRef.current) groupRef.current.rotation.y += 0.0015;
  });

  return (
    <group ref={groupRef}>
      {arcs.map((points, i) => (
        <Line
          key={i}
          points={points}
          color="#00f2ff"
          lineWidth={0.5}
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      ))}
    </group>
  );
}

/**
 * UI OVERLAY COMPONENTS
 */
const StatCard = ({ label, value, color }) => (
  <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 p-4 rounded-xl">
    <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">{label}</p>
    <p className={`text-2xl font-bold ${color}`}>{value}</p>
  </div>
);

/**
 * MAIN APP
 */
export default function App() {
  return (
    <div className="relative w-full h-screen bg-[#020617] overflow-hidden text-white font-sans">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas dpr={[1, 2]}>
          <PerspectiveCamera makeDefault position={[0, 1.5, 4]} fov={45} />
          <OrbitControls 
            enablePan={false} 
            enableZoom={false} 
            maxPolarAngle={Math.PI / 2} 
            minPolarAngle={0}
          />
          
          <color attach="background" args={["#020617"]} />
          <fog attach="fog" args={["#020617", 5, 15]} />
          
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f2ff" />
          
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <DigitalHemisphere />
            <ConnectionArcs />
          </Float>

          {/* Grid helper for depth */}
          <gridHelper 
            args={[20, 20, "#1e293b", "#0f172a"]} 
            position={[0, -0.5, 0]} 
          />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-12 z-10 pointer-events-none">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
          
          <div className="max-w-lg pointer-events-auto">
            <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
              DECENTRALIZED <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                GLOBAL NETWORK
              </span>
            </h1>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Real-time visualization of the data backbone. 
              Monitoring nodes across 148 regions with sub-millisecond latency.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg transition-all shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                VIEW NODES
              </button>
              <button className="px-8 py-3 border border-white/20 hover:bg-white/5 rounded-lg font-bold transition-all">
                DOCUMENTATION
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full md:w-auto pointer-events-auto">
            <StatCard label="Live Connections" value="1.2M+" color="text-cyan-400" />
            <StatCard label="Global Uptime" value="99.99%" color="text-emerald-400" />
            <StatCard label="Data Velocity" value="4.8 TB/s" color="text-blue-400" />
            <StatCard label="Active Nodes" value="14,209" color="text-purple-400" />
          </div>

        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] -translate-y-1/2 -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-64 bg-blue-600/10 rounded-full blur-[100px] -z-10" />
    </div>
  );
}