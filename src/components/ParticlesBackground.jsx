import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = (props) => {
        const [init, setInit] = useState(false);

        useEffect(() => {
                initParticlesEngine(async (engine) => {
                        await loadSlim(engine);
                }).then(() => {
                        setInit(true);
                });
        }, []);

        const particlesLoaded = () => { };

        const options = useMemo(
                () => ({
                        fullScreen: { enable: true, zIndex: 10 },
                        background: {
                                color: { value: "transparent" },
                        },
                        fpsLimit: 120,
                        interactivity: {
                                detectsOn: "window",
                                events: {
                                        onClick: { enable: true, mode: "attract" },
                                        onHover: { enable: true, mode: "grab" },
                                        onDiv: {
                                                selectors: "#repulse-navbar, #repulse-content",
                                                enable: true,
                                                mode: "repulse",
                                        },
                                },
                                modes: {
                                        push: { distance: 1000, duration: 25 },
                                        grab: { distance: 160, links: { opacity: 0.4 } },
                                        repulse: {
                                                distance: 380,
                                                duration: 0.1,
                                                factor: 18,
                                                speed: 8,
                                        },
                                },
                        },
                        particles: {
                                color: { value: "#ebdbb2" },
                                links: {
                                        color: "#665c54",
                                        distance: 210,
                                        enable: true,
                                        opacity: 0.25,
                                        width: 1,
                                },
                                move: {
                                        direction: "none",
                                        enable: true,
                                        outModes: { default: "bounce" },
                                        random: true,
                                        speed: 0.2,
                                        straight: false,
                                        attract: { enable: false },
                                },
                                number: {
                                        density: { enable: true, area: 900 },
                                        value: 120,
                                },
                                opacity: {
                                        value: { min: 0, max: 0.45 },
                                        animation: {
                                                enable: true,
                                                speed: 0.4,
                                                sync: false,
                                                startValue: "min",
                                        },
                                },
                                shape: { type: "circle" },
                                size: { value: { min: 1.5, max: 2.5 } },
                        },
                        detectRetina: true,
                }),
                []
        );

        if (!init) return null;

        return <Particles id={props.id} init={particlesLoaded} options={options} style={{ pointerEvents: "none" }} />;
};

export default ParticlesBackground;
