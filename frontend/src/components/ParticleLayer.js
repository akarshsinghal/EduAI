import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const ParticlesLayer = () => {


    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
      <>

<Particles
  id="tsparticles"
  init={particlesInit}
  loaded={particlesLoaded}
  options={{
    fullScreen: {
      enable: true,
      zIndex: -2, // Set zIndex to -2
    },
    background: {
      color: {
        value: "", // Set empty background
      },
    },
    fpsLimit: 60,
    interactivity: {
      detectOn: "canvas",
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        onClick: {
          enable: false, // Disable click to create more particles
        },
      },
    },
    particles: {
      color: {
        value: "#89CBF0", // Set base color for the particles
      },
      links: {
        color: "#89CBF0", // Set color for the links
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: "none",
        random: false,
        straight: false,
        outMode: "bounce",
        bounce: {
          enable: true,
          distance: 200,
        },
      },
      number: {
        value: 30, // Set the fixed number of particles
      },
      opacity: {
        value: 0.8,
        random: false,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: 8,
        random: true,
      },
    },
    detectRetina: true,
  }}
/>



        </>
    );
};

export default ParticlesLayer;