import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const AnimatedShape = () => {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#00f3ff"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0}
      />
    </Sphere>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: "80px",
        overflow: "hidden",
      }}
    >
      <div style={{ flex: 1, zIndex: 1, position: "relative" }}>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            fontSize: "1.5rem",
            color: "var(--primary)",
            marginBottom: "1rem",
          }}
        >
          Hi, I am
        </motion.h3>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ fontSize: "4rem", lineHeight: "1.1", marginBottom: "1rem" }}
        >
          Islam Khaled <br />
          <span className="gradient-text">Full-Stack Developer</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{
            fontSize: "1.1rem",
            color: "var(--text-muted)",
            marginBottom: "2rem",
            maxWidth: "500px",
          }}
        >
          I build immersive, user-centric web experiences with modern
          technologies and clean code.
        </motion.p>
        <motion.button
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5, delay: 0.1 }}
  style={{
    padding: "1rem 2rem",
    fontSize: "1rem",
    backgroundColor: "transparent",
    border: "2px solid var(--primary)",
    color: "var(--primary)",
    borderRadius: "50px",
    cursor: "pointer",
    fontWeight: "bold",
  }}
  whileHover={{
    scale: 1.05,
    backgroundColor: "var(--primary)",
    color: "#000",
  }}
  onClick={() => {
    window.open(
      "https://drive.google.com/file/d/1pSEwg9TGvtGtHCNaGkdRwQN89YRnBU2Z/view?usp=sharing",
      "_blank"
    );
  }}
>
  Open CV
</motion.button>

      </div>

      <div style={{ flex: 1, height: "100%", position: "relative" }}>
        <Canvas
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <ambientLight intensity={1} />
          <directionalLight position={[3, 2, 1]} />
          <AnimatedShape />
          <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
        {/* Decorative blurred glow behind 3D object */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "10%",
            width: "400px",
            height: "400px",
            background: "var(--secondary)",
            filter: "blur(150px)",
            opacity: 0.2,
            zIndex: -1,
            borderRadius: "50%",
          }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
