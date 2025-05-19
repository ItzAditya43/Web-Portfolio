tsParticles.load("tsparticles", {
    background: {
      color: {
        value: "transparent"
      }
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          area: 1000
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.5
      },
      size: {
        value: 2,
        random: true
      },
      move: {
        enable: true,
        speed: 1.2,
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "out"
        },
        attract: {
          enable: false
        }
      },
      links: {
        enable: true,
        distance: 140,
        color: "#ffffff",
        opacity: 0.25,
        width: 1.2,
        triangles: {
          enable: true,
          color: "#ffffff",
          opacity: 0.1
        }
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 180,
          links: {
            opacity: 0.6,
            color: "#ffffff"
          }
        }
      }
    },
    detectRetina: true
  });
  