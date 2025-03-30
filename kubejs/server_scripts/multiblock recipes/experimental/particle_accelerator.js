
if (global.option('enable_particle_accelerators')) {

    ServerEvents.recipes(event => {

        const velocity = [
            { name: 'stationary', speed: 18 },
            { name: 'slow', speed: 17 },
            { name: 'low_speed', speed: 16 },
            { name: 'standard', speed: 15 },
            { name: 'mid_speed', speed: 14 },
            { name: 'fast', speed: 13 },
            { name: 'high_speed', speed: 12 },
            { name: 'superfast', speed: 11 },
            { name: 'hypersonic', speed: 10 },
            { name: 'subrelativistic', speed: 9 },
            { name: 'relativistic', speed: 8 },
            { name: 'ultra_relativistic', speed: 7 },
            { name: 'near_light', speed: 6 },
            { name: 'light_speed', speed: 5 },
            { name: 'hyper_light', speed: 4 }
        ];

        const particles = [
            { name: 'proton', segments: 2 },
            { name: 'neutron', segments: 3 },
            { name: 'electron', segments: 3 },
            { name: 'neutrino', segments: 5 },
            { name: 'up_quark', segments: 3 },
            { name: 'down_quark', segments: 3 },
            { name: 'muon', segments: 3 },
            { name: 'electron_neutrino', segments: 5 },
            { name: 'meson', segments: 6 },
            { name: 'strange_quark', segments: 6 },
            { name: 'charm_quark', segments: 8 },
            { name: 'bottom_quark', segments: 10 },
            { name: 'higgs_boson', segments: 12 },
            { name: 'tau_particle', segments: 6 },
            { name: 'muon_neutrino', segments: 8 },
            { name: 'tau_neutrino', segments: 8 },
            { name: 'gluon',segments:  10 },
            { name: 'photon', segments: 12 },
            { name: 'graviton', segments: 14 }
        ];

        const corner_piece = (name, speed, duration) => {
            event.recipes.gtceu.pa_corner_segment(`${speed}_${name}`)
                .inputFluids(`gtceu:${speed}_${name} 1`)
                .outputFluids(`gtceu:${speed}_${name} 1`)
                .duration(duration);
        }

        const tri_piece = (name, speed, duration) => {
            event.recipes.gtceu.pa_tri_segment(`${speed}_${name}`)
                .inputFluids(`gtceu:${speed}_${name} 1`)
                .outputFluids(`gtceu:${speed}_${name} 1`)
                .duration(duration);
        }

        // Transport
        particles.forEach(particle => {
            for (let i = 0; i < particle.segments; i++) {
                corner_piece(particle.name, velocity[i].name, velocity[i].speed);
                tri_piece(particle.name, velocity[i].name, velocity[i].speed);
            }
        });




    });

}